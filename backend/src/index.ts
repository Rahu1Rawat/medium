import { Hono } from "hono";
import userRoutes from "./userRoutes";
import blogRoutes from "./blogRoutes";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());
app.route("/api/v1/user", userRoutes);
app.route("/api/v1/blog", blogRoutes);

export default app;
