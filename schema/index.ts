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
    imageUrl: z.optional(z.string()),
    referrerLink: z.optional(z.string()),
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
    // TODO: Coupon Code
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
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long",
    }).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]+$/, {
        message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
    }),
    confirmPassword: z.optional(z.string().min(8)),
})

export const FormMessageSchema = z.object({
    name: z.string().min(1, {
        message: "FirstName is required",
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    phoneNo: z.string().min(10, {
        message: "Phone number is required",
    }),
    subject: z.string().min(1, {
        message: "subject is required",
    }),
    message: z.string().min(1, {
        message: "message is required",
    }),
});

export const UpdateUserSchema = z.object({
    // imageUrl: z.optional(z.string().min(1)),
    firstName: z.optional(z.string().min(1)),
    lastName: z.optional(z.string().min(1)),
    userName: z.string().min(1),
    email: z.string().email(),
    phoneNo: z.optional(z.string().min(10)),
});

export const UpdatePasswordSchema = z.object({
    currentPassword: z.string().min(8, {
        message: "Password is required"
    }),
    newPassword: z.string().min(8, {
        message: "Password must be at least 8 characters long",
    }).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]+$/, {
        message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
    }),
    confirmPassword: z.string().min(8, {
        message: "Password is required"
    }),
});

export const CommunitySchema = z.object({
    userName: z.string().min(1, {
        message: "Username is required"
    }),
})


export const FeedbackSchema = z.object({
    excellent: z.optional(z.boolean()),
    manageable: z.optional(z.boolean()),
    notWorking: z.optional(z.boolean()),
    content: z.optional(z.string().min(1)),
    starRating: z.optional(z.number()),
})