import Image from "next/image"
import { NewPasswordForm } from "./_components/new-password-form"
import { getUserByEmail } from "@/lib/user"
import { getPasswordTwoFactorTokenByEmail } from "@/data/password-twofactor-token";


const NewPasswordPage = async ({ email }: { email: string }) => {

    // const currentEmail = await getUserByEmail(email);
    const tokenData = await getPasswordTwoFactorTokenByEmail(email);


    return (
        <div
            className="sm:h-[80vh] h-[60vh]"
        >
            <div className="flex items-center justify-center flex-1 w-full h-full">
                <div className="flex-1 h-full px-3 lg:mb-0 bg-green-100 lg:flex hidden">
                    <div className="relative w-[480px] h-[570px] mx-auto">
                        <Image
                            src="/moneyrain.png"
                            fill
                            alt="MoneyRain"
                        />
                    </div>
                </div>
                <NewPasswordForm
                    token={tokenData}
                // email={currentEmail}
                />
            </div>
        </div>
    )
}

export default NewPasswordPage