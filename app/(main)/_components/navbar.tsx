import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { NavItems } from "./nav-items"

export const Navbar = () => {
    return (
        <nav className="h-[70px] border-b-2 p-2 w-full">
            <div className="max-w-[1200px] mx-auto px-3 flex items-center justify-between h-full py-2">
                <Logo
                    width={80}
                    height={45}
                />
                <NavItems
                    className="gap-x-4 hidden lg:flex"
                />
                <MobileMenu />
            </div>
        </nav>
    )
}

