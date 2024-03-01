import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(5, "Fullname must be at least 5 characters")
      .max(50, "Fullname must  not exceed 50 characters"),
    username: z
      .string()
      .min(5, "Username must be at least 5 characters")
      .max(20, "Username must  not exceed 20 characters"),
    email: z.string().email(),
    password: z.string().min(5, "Password must be at least 5 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be at least 5 characters")
    .max(20, "Username must  not exceed 20 characters"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
