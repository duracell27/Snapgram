import * as z from "zod";
export const SignupValidation = z.object({
    name: z.string().min(2, {'message': 'Too short'}),
  username: z.string().min(2).max(20),
  email: z.string().email(),
  password: z.string().min(8, {'message': 'Password is too short'}),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, {'message': 'Password is too short'}),
});

export const PostValidation = z.object({
  caption: z.string().min(5,{message: 'Caption must be at least 5 characters'}).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2,{message: 'Location must be at least 2 characters'}).max(100),
  tags: z.string()
});