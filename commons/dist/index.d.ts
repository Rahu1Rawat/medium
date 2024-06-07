import { z } from "zod";
declare const signupInputSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
}, {
    username: string;
    email: string;
    password: string;
}>;
export type signupInputSchema = z.infer<typeof signupInputSchema>;
declare const signinInputSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type signinInputSchema = z.infer<typeof signinInputSchema>;
declare const blogInputSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type blogInputSchema = z.infer<typeof blogInputSchema>;
declare const updateBlogInputSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: string;
}, {
    title: string;
    content: string;
    id: string;
}>;
export type updateBlogInputSchema = z.infer<typeof updateBlogInputSchema>;
export { z, signupInputSchema, signinInputSchema, blogInputSchema, updateBlogInputSchema, };
