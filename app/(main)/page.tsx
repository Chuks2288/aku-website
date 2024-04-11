import { AboutUs } from "./_components/about-us"
import { Hero } from "./_components/hero"
import { HowItWorks } from "./_components/how-it-works"
import { Mission } from "./_components/mission"
import { OurService } from "./_components/our-service"
import { SuccessBanner } from "./_components/success-banner"

const HomePage = () => {
    return (
        <div className="">
            <Hero />
            <OurService />
            <AboutUs />
            <Mission />
            <SuccessBanner />
            <HowItWorks />
        </div>
    )
}

export default HomePage