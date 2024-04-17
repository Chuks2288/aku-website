import Image from "next/image"
import { LoginForm } from "./_components/login-form"

const GetStartedPage = () => {
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
                <LoginForm />
            </div>
        </div>
    )
}

export default GetStartedPage