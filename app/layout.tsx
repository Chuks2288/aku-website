import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Toaster } from "sonner"
import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const inter = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    }
  ]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <SocketProvider>
            <ModalProvider />
            <QueryProvider>
              {children}
            </QueryProvider>
          </SocketProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
