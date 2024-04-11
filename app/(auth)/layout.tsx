import { Footer } from "../(main)/_components/footer"
import { Navbar } from "../(main)/_components/navbar"

const MainLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="w-full h-full">
            <Navbar />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout