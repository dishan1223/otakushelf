"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const sidebarLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Discover",
        href: "/discover",
    },
    {
        title: "Library",
        href: "/library",
    },
]

export default function SideBar() {
    const pathname = usePathname();

    return (
        <div className="outline outline-white h-screen w-64 py-8">
            <div>
                <h1 className="text-3xl font-bold text-orange-500 px-4">OtakuShelf</h1>
            </div>

            <div className="mt-8">
                <ul className="text-2xl pl-4 flex flex-col">
                    {sidebarLinks.map(({ href, title }) => {
                        const isActive = pathname === href || pathname.startsWith(`${href}/`);
                        
                        return (
                            <li 
                                key={title} 
                                className={`flex items-center h-14 ${
                                    isActive ? "bg-gradient-to-r from-gray-900 to-slate-600" : ""
                                }`}
                            >
                                <Link href={href} className="w-full h-full flex items-center px-4">
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

