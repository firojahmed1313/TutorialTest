import { resend } from "@/lib/config/resend";
import VerificationEmail from "@/components/VerificationEmailTemplate";
import { ApiResponds } from "@/types/ApiResponds";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponds> {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [email],
            subject: 'Hello world',
            react: VerificationEmail({username, otp:verifyCode}),
        });
        console.log(data);
        return {
            success: true,
            message: "Verification email sent successfully",
        };
    } catch (error) {
        console.warn("Verification email error: " + error + ": " + email);
        return {
            success: false,
            message: "Failed to send Verification email ",
        };
    }
}