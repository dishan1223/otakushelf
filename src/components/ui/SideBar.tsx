"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const sidebarLinks = [
  { title: "Home", href: "/" },
  { title: "Discover", href: "/discover" },
  { title: "Library", href: "/library" },
];

export default function SideBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Toggle Button (Hidden in md) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 z-50 bg-gray-800 rounded-full shadow-md 
                   fixed bottom-6 right-6 md:hidden"
      >
        {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
      </button>

      {/* Sidebar: Hidden on mobile, always visible on md+ */}
      <div
        className={cn(
          "h-screen w-64 bg-gray-900 text-white shadow-md transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0 fixed top-0 left-0" : "-translate-x-full fixed top-0 left-0",
          "md:translate-x-0 md:static md:block"
        )}
      >
        <div className="py-8 px-4">
          <h1 className="text-3xl font-bold text-orange-500">OtakuShelf</h1>
        </div>

        <nav className="mt-8">
          <ul className="text-2xl pl-4 flex flex-col">
            {sidebarLinks.map(({ href, title }) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={title} className={cn("flex items-center h-14", isActive && "bg-gray-700")}>
                  <Link href={href} className="w-full h-full flex items-center px-4">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

