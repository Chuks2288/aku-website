import { Button } from "@/components/ui/button";
import { useResetForm } from "@/hooks/use-reset-form";
import { Loader2 } from "lucide-react";


export const SendResetEmailButton = ({ email }: { email: string, }) => {
    const { sendResetEmail, isPending } = useResetForm();

    const handleSendEmail = () => {
        sendResetEmail(email);
    };

    return (
        <Button
            variant="ghost"
            disabled={isPending}
            onClick={handleSendEmail}
            className="text-blue-700"
        >
            {isPending ?
                <Loader2 className="animate-spin w-5 h-5" />
                : "Resend"
            }
        </Button>
    );
}