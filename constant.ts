export const navItems = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About Us",
        path: "/about",
    },
    {
        label: "Services",
        path: "/services",
    },
    {
        label: "Coupon Vendor",
        path: "/coupon",
    },
    {
        label: "Contact Us",
        path: "/contact",
    },
    {
        label: "Get started",
        path: "/getStarted",
    },
]

export const socialIcons = [
    {
        icon: "basil:twitter-outline",
        href: "www.twitter.com",
    },
    {
        icon: "ant-design:instagram-outlined",
        href: "www.instagram.com",
    },
    {
        icon: "circum:facebook",
        href: "www.facebook.com",
    },
]

export const infoItems = [
    {
        label: "About Us",
        path: "/about",
    },
    {
        label: "My Account",
        path: "/getStarted",
    },
    {
        label: "Contact Us",
        path: "/contact",
    },
]

export const ourServiceItems = [
    {
        icon: "arcticons:moneytracker",
        title: "Referral Program:",
        description: 'A referral system that allows users to invite others to join "AKU" and earn rewards for successful referrals, encouraging user growth.'
    },
    {
        icon: "fluent:people-community-20-regular",
        title: "Community and Support:",
        description: 'A referral system that allows users to invite others to join "AKU" and earn rewards for successful referrals, encouraging user growth.'
    },
    {
        icon: "fluent-mdl2:market",
        title: "News and Market Updates:",
        description: 'A referral system that allows users to invite others to join "AKU" and earn rewards for successful referrals, encouraging user growth.'
    },
    {
        icon: "arcticons:moneytracker",
        title: "Referral Program:",
        description: 'A referral system that allows users to invite others to join "AKU" and earn rewards for successful referrals, encouraging user growth.'
    },

    {
        icon: "arcticons:moneytracker",
        title: "Affiliate Earnings:",
        description: 'It is a commission you get when you effectively a new user using your affiliate link.'
    },
    {
        icon: "arcticons:moneytracker",
        title: "AKU Socials:",
        description: 'Earn commissions by actively participating in social media tasks.'
    },
    {
        icon: "arcticons:moneytracker",
        title: "Non-Affiliate Earnings:",
        description: ' Earn Points by engaging with content – reading, commenting, and sharing. '
    },
    {
        icon: "arcticons:moneytracker",
        title: "Non-Affiliate Earnings:",
        description: 'It is a commission you get when you effectively a new user using your affiliate link.'
    },
];

export const missionInfo = [
    {
        id: "1",
        image: "/home/mission.svg",
        title: "Our Mission",
        text: "At AKU, our mission is to empower individuals to realize their full potential by providing them with opportunities to earn rewards for their online activities. We believe in harnessing the power of the digital world to improve lives and offer a platform where everyone can access a range of engaging and rewarding tasks. We are committed to creating a supportive community that fosters financial growth, skill development, and personal fulfilment for our user.",
    },
    {
        id: "2",
        image: "/home/vision.svg",
        title: "Our Vision",
        text: "Our vision is to become the leading online platform where people can transform their spare time into meaningful rewards and personal development. We aspire to create a global community of users who benefit from our innovative and diverse range of activities. We aim to continually evolve and expand our offerings, making AKU the go-to destination for individuals seeking financial empowerment and self-improvement. We are dedicated to shaping a future where anyone can easily access opportunities that enhance their lives, all while contributing positively to the digital landscape.",
    },

]

export const works = [
    {
        icon: "fluent:people-community-20-regular",
        title: "Welcome Bonus",
        text: "A commission you get as a new user when you proficiently Sign Up.",
    },
    {
        icon: "arcticons:moneytracker",
        title: "Non-Affiliate Earnings",
        text: " Earn Points by engaging with content – reading, commenting, and sharing.",
    },
    {
        icon: "fluent:people-community-20-regular",
        title: "Community Engagement",
        text: "Connect with others, share experiences, and learn from a like-minded community focused on financial empowerment.",
    },
    {
        icon: "arcticons:moneytracker",
        title: "Affiliate Earnings",
        text: "It is a commission you get when you effectively a new user using your affiliate link.",
    },
    {
        icon: "arcticons:moneytracker",
        title: "Daily Visits",
        text: "Bonus you get when you visit and explore the site daily.",
    },
    {
        icon: "arcticons:moneytracker",
        title: "AKU Socials",
        text: "Earn commissions by actively participating in social media tasks.",
    },
]

interface regInfoProps {
    placeholder: string;
    name: string;
    type: string;
}

export const regInfo = [
    {
        placeholder: "First Name",
        name: "firstName",
        type: "text",
    },
    {
        placeholder: "Last Name",
        name: "lastName",
        type: "text",
    },
    {
        placeholder: "Username",
        name: "userName",
        type: "text",
    },
    {
        placeholder: "Enter your e-mail",
        name: "email",
        type: "email",
    },
    {
        placeholder: "Phone No.",
        name: "phoneNo",
        type: "text",
    },
    {
        placeholder: "Password",
        name: "password",
        type: "password",
    },
    // {
    //     placeholder: "Coupon Code",
    //     name: "couponCode",
    //     type: "text",
    // }
] as regInfoProps[];

export const options = [
    {
        icon: "arcticons:moneytracker",
        title: "AKU Activity Earnings:",
        description: "Our unique AKU Activity Earnings system allows you to accumulate points by participating in social media tasks. Your active involvement contributes to your financial growth.",
    },
    {
        icon: "fluent:people-community-20-regular",
        title: "Thriving Community Support:",
        description: "Join a vibrant community of individuals passionate about financial empowerment. Share experiences, seek advice, and celebrate successes together.",
    },
    {
        icon: "fluent-mdl2:market",
        title: "Regular Updates and Features:",
        description: "Stay ahead with our regular updates on market trends, financial news, and new features on the AKU platform",
    },
    {
        icon: "material-symbols-light:quiz-outline-sharp",
        title: "Dedicated Customer Support:",
        description: "Experience top-notch customer support. Our team is here to assist you, whether you have questions about our services or need guidance on your financial endeavors.",
    },
];

export const coupons = [
    {
        logo: "/logo.svg",
        name: "Uche Ben",
        bank: "Bank: UBA",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Ugochinyerem",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Chinonso",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Witty",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Abigail",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Sophia",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Emmanuel",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Sylvester",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "John Kennis",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Michael",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Johnson",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
    {
        logo: "/logo.svg",
        name: "Prince",
        bank: "Bank: Opay",
        icon: "logos:whatsapp-icon",
        contact: +2348182317516,
    },
]


export const profiles = [
    {
        title: "Account Settings",
        path: "/settings",
    },
    {
        title: "Community",
        path: "/community",
    },
    {
        title: "Referrals",
        path: "/referrals",
    },
    {
        title: "News Feed",
        path: "/news-feed",
    },
    {
        title: "Withdrawals",
        path: "/withdrawals",
    },
    {
        title: "Feedback",
        path: "/feedback",
    },
]