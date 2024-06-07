"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInputSchema = exports.blogInputSchema = exports.signinInputSchema = exports.signupInputSchema = exports.z = void 0;
const zod_1 = require("zod");
Object.defineProperty(exports, "z", { enumerable: true, get: function () { return zod_1.z; } });
const signupInputSchema = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.signupInputSchema = signupInputSchema;
const signinInputSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.signinInputSchema = signinInputSchema;
const blogInputSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string().min(6),
});
exports.blogInputSchema = blogInputSchema;
const updateBlogInputSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string().min(6),
    id: zod_1.z.string(),
});
exports.updateBlogInputSchema = updateBlogInputSchema;
