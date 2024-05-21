import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { HowItWorkBanner } from "./_components/how-work-banner"
import { ReferEarnBanner } from "./_components/refer-earn-banner"
import { ReferralLink } from "./_components/referral-link"
import { currentUser } from "@/lib/auth";
import { logout } from "@/actions/logout";
import { User } from "@prisma/client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { db } from "@/lib/db"

// import { getUsersByReferrerLink } from "@/lib/user";
import { Refer } from "./_components/referral"

const ReferralsPage = async () => {
    const currUser = await currentUser();

    // Fetch the current user including their referrer information
    const user = await db.user.findUnique({
        where: {
            id: currUser?.id
        }
    });

    // // Get users who used the same referrer link
    // const newReferrals = await getUsersByReferrerLink(user?.referral?.referrerLink as any);



    // const userReferrerLink = user?.referral?.referrerLink;
    // const fetchedUsers = userReferrerLink ? await getUsersByReferrerLink(userReferrerLink) : [];



    return (
        <div className="space-y-10 max-w-[40rem] mx-auto px-3">
            <ReferEarnBanner />
            <Link
                href="/referrals/referral-history"
                className="flex items-center gap-x-1 text-sm font-bold"
            >
                Referral History
                <ArrowRight className="w-4 h-4" />
            </Link>
            <HowItWorkBanner />
            <ReferralLink
                user={user as User}
            />
        </div>
    );
};

export default ReferralsPage;
