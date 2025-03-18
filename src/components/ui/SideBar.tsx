import Link from "next/link"

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
    return (
        <div className="outline outline-white h-screen w-64 py-8">
            <div>
                <h1 className='text-3xl font-bold text-orange-500 px-4'>OtakuShelf</h1>
            </div>

            <div className="mt-8">
                <ul className="text-2xl pl-4 flex flex-col">
                    {sidebarLinks.map((link) => (
                        <li key={link.title} className="flex items-center h-14 hover:bg-gradient-to-r from-gray-900 to-slate-600">
                            <Link href={link.href}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}
