
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full h-20 border-b border-neutral-800">
            <div className="flex items-center justify-between max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-3xl font-bold text-orange-500">otakushelf</h1>
                </div>
                <div>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
