import { z } from "zod";

const signupInputSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type signupInputSchema = z.infer<typeof signupInputSchema>;

const signinInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export type signinInputSchema = z.infer<typeof signinInputSchema>;

const blogInputSchema = z.object({
  title: z.string(),
  content: z.string().min(6),
});
export type blogInputSchema = z.infer<typeof blogInputSchema>;

const updateBlogInputSchema = z.object({
  title: z.string(),
  content: z.string().min(6),
  id: z.string(),
});
export type updateBlogInputSchema = z.infer<typeof updateBlogInputSchema>;

export {
  z,
  signupInputSchema,
  signinInputSchema,
  blogInputSchema,
  updateBlogInputSchema,
};
