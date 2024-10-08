import Image from "next/image"

import { NewPasswordForm } from "./_components/new-password-form"

const NewPasswordPage = async () => {
    // TODO: Try to update the email of the current user
    // and also remember the three step verification for reset, code-verification and new-password
    return (
        <div
            className="sm:h-[80vh] h-[60vh]"
        >
            <div className="flex items-center justify-center flex-1 w-full h-full">
                <div className="flex-1 h-full px-3 lg:mb-0 bg-green-100 lg:flex hidden">
                    <div className="relative w-[480px] h-[570px] mx-auto self-center">
                        <Image
                            src="/moneyrain.png"
                            fill
                            alt="MoneyRain"
                        />
                    </div>
                </div>
                <NewPasswordForm
                    email="dumbirichuks@gmail.com"
                />
            </div>
        </div>
    )
}

export default NewPasswordPage