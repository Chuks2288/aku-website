import { Footer } from "@/app/(main)/_components/footer"
import { CommunityNavbar } from "./_components/community-navbar"
import { currentUser } from "@/lib/auth"
import { User } from "@prisma/client"
import { TitleProvider } from "@/hooks/use-title"

type Props = {
    children: React.ReactNode
}

const ChatLayout = async ({
    children
}: Props) => {
    const user = await currentUser();
    return (
        <div>
            <TitleProvider>
                <div className="">
                    <CommunityNavbar user={user as User} />
                    <main className="">
                        {children}
                    </main>
                    {/* <Footer /> */}
                </div>
            </TitleProvider>
        </div>
    )
}

export default ChatLayout