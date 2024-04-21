import { currentUser } from "@/lib/auth"
import { ProfileSidebar } from "./_components/profile-sidebar"
import { User } from "@prisma/client";

interface Props {
    children: React.ReactNode
}

const ProfileLayout = async ({
    children
}: Props) => {

    const user = await currentUser();

    return (
        <div className="">
            <ProfileSidebar
                user={user as User}
            />
            <main className="md:pl-72 pl-0">
                <div className="max-w-[950px] mx-auto px-4 h-full p-10">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default ProfileLayout