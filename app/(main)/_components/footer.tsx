import { FooterInfo } from "./footer-info"
import { SocialIcons } from "./social-icons"
import { Subscribe } from "./subscribe"

export const Footer = () => {
    return (
        <footer className="h-max w-full bg-green-950 py-10">
            <div className="max-w-[1200px] mx-auto px-3 text-white grid lg:grid-cols-3 grid-cols-2 h-full gap-8 w-full">
                <SocialIcons />
                <FooterInfo />
                <Subscribe />
            </div>
        </footer>
    )
}

