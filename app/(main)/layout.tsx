import { Footer } from "./_components/footer"
import { Navbar } from "./_components/navbar"

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