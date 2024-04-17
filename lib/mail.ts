import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendPasswordResetEmail = async (
    email: string,
    token: string,
) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `<p>Enter this code: ${token}> to reset password.</p>`
    });
};
