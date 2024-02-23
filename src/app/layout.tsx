import "./globals.css";
import React from "react";
import {Inter} from "next/font/google";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";


const inter = Inter({
    subsets: ["latin"]

})

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: [
        {
            url: "/images/logo_half.svg",
            href: "/images/logo_half.svg"
        }
    ]
}
export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
