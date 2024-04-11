import Image from "next/image"
import { RegisterForm } from "./_components/register-form"

const RegisterPage = () => {
    return (
        <div
            className="h-[80vh]"
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

                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage