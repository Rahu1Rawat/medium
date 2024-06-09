import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInputSchema, signinInputSchema, } from "@rahu1_rawat/medium-commons";
const userRoutes = new Hono();
userRoutes.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const parseResult = signupInputSchema.safeParse(await c.req.json());
    if (!parseResult.success) {
        return c.json(parseResult.error.format(), 400);
    }
    const validData = parseResult.data;
    const user = await prisma.user.create({
        data: {
            username: validData.username,
            email: validData.email,
            password: validData.password,
        },
    });
    const token = await sign({ userId: user.id }, c.env.JWT_SECRET);
    return c.json({
        jwt: token,
        username: user.username,
    });
});
userRoutes.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const parseResult = signinInputSchema.safeParse(body);
    if (!parseResult.success) {
        return c.json(parseResult.error.format(), 400);
    }
    const validData = parseResult.data;
    const user = await prisma.user.findUnique({
        where: {
            email: validData.email,
            password: validData.password,
        },
    });
    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
    }
    const token = await sign({ userId: user.id }, "secret");
    return c.json({ jwt: token, username: user.username });
});
export default userRoutes;
