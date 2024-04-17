import { FormInput } from "./_components/form-input"
import { GetInTouch } from "./_components/get-in-touch"
import { FormBanner } from "./_components/form-banner"
import { Hero } from "./_components/hero"
import { SocialMedia } from "./_components/social-media"

const ContactPage = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <GetInTouch />
            <FormBanner />
            <FormInput />
            <SocialMedia />
        </div>
    )
}

export default ContactPage