import * as z from "zod";

export const SubscribeSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    isTermsEnabled: z.optional(z.boolean()),
});

export const RegisterSChema = z.object({
    firstName: z.string().min(1, {
        message: "FirstName is required",
    }),
    lastName: z.string().min(1, {
        message: "LastName is required",
    }),
    userName: z.string().min(1, {
        message: "Username is required",
    }),
    email: z.string().email({
        message: "Email is required",
    }),
    phoneNo: z.string().min(10, {
        message: "Phone number should be a 10-digit number and above",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long",
    }).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]+$/, {
        message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
    }),
    // couponCode: z.string().max(20),
})

export const LoginSchema = z.object({
    userName: z.string().min(1, {
        message: "Username is required"
    }),
    password: z.string().min(8, {
        message: "Password is required",
    })
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
});

export const CodeVerificationSchema = z.object({
    code: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum of 6 characters required",
    }),
});