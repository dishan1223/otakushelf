export default function SideBar() {
    return (
        <div className="outline outline-white h-screen w-64 py-8">
            <div>
                <h1 className='text-3xl font-bold text-orange-500 px-4'>OtakuShelf</h1>
            </div>

            <div className="mt-8">
                <ul className="text-2xl px-4 flex flex-col gap-6">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            
        </div>
    )
}
