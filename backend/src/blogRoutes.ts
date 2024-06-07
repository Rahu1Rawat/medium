import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { z } from "zod";
import { Hono } from "hono";
import { jwt, sign, verify } from "hono/jwt";
import {
  blogInputSchema,
  updateBlogInputSchema,
} from "@rahu1_rawat/medium-commons";

const blogRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// Middleware for JWT verification
blogRoutes.use("/*", async (c, next) => {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader) {
      return c.json({ error: "Authorization header missing" }, 401);
    }

    const [scheme, token] = authHeader.split(" ");
    if (scheme.toLowerCase() !== "bearer" || !token) {
      return c.json({ error: "Invalid Authorization format" }, 401);
    }

    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload || !payload.userId) {
      return c.json({ error: "Invalid token payload" }, 401);
    }

    c.set("userId", payload.userId);
    await next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

// POST route
  blogRoutes.post("", async (c) => {
    const userId = c.get("userId");

    if (!userId) {
      return c.json({ error: "Unauthorized or Invalid Token" }, 401);
    }

    const body = await c.req.json();

    try {
      blogInputSchema.parse(body);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return c.json({ error: error.issues }, 400);
      } else {
        return c.json({ error: "Internal server error" }, 500);
      }
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
      const post = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          authorId: userId,
        },
      });
      return c.json(
        { message: "Post created successfully", postId: post.id },
        201
      );
    } catch (error) {
      console.error("Error creating post:", error);
      return c.json({ error: "Failed to create post" }, 500);
    }
  });

// ! Updating a post
blogRoutes.put("/:id", async (c) => {
  const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    if (!post) {
      return c.json({ error: "Post not found" }, 404);
    }
    const userId = c.get("userId");
    if (userId !== post.authorId) {
      return c.json({ error: "Unauthorized to update this post" }, 403);
    }
    const body = await c.req.json();

    try {
      updateBlogInputSchema.parse(body);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        return c.json({ error: validationError.issues }, 400);
      } else {
        return c.json({ error: "Internal server error" }, 500);
      }
    }

    try {
      const updatePost = await prisma.post.update({
        where: {
          id: id,
        },
        data: {
          title: body.title,
          content: body.content,
        },
      });
      return c.json(
        { message: "Post Updated Successfully", post: updatePost },
        200
      );
    } catch (updateError) {
      console.error("Error updating post:", updateError);
      return c.json({ error: "Failed to update post" }, 500);
    }
  } catch (error) {
    console.error("Error fetching post:", error); // Log the error
    return c.json({ error: "Failed to fetch post" }, 500);
  }
});

blogRoutes.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const posts = await prisma.post.findMany();
    return c.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return c.json({ error: "Failed to fetch posts" }, 500);
  }
});


blogRoutes.get("/:id", async (c) => {
  const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    if (!post) {
      return c.json({ error: "Post not found" }, 404);
    }
    return c.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return c.json({ error: "Failed to fetch post" }, 500);
  }
});

export default blogRoutes;
