import { Banner } from "./_components/banner"
import { Hero } from "./_components/hero"
import { OurService } from "./_components/our-service"

const ServicesPage = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <OurService />
            <Banner />
        </div>
    )
}

export default ServicesPage