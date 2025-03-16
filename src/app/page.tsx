import Image from "next/image";
import HomeImage from "@/images/home.svg";
import HomeImageMobile from "@/images/home-mobile.svg";

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='hidden md:flex md:overflow-hidden absolute top-0 left-0 -z-10'>
           <Image 
                src={HomeImage} 
                alt="Home"
            /> 
        </div>

        <div className='md:hidden overflow-hidden absolute top-0 left-0 -z-10'>
            <Image 
                src={HomeImageMobile} 
                alt="Home"
            />
        </div>

        <div className='flex flex-col items-center gap-5'>
            <div>
                <h1 className="text-2xl text-center font-bold md:text-5xl">One place to track <br/>all you <span className="text-orange-500">manga</span></h1>
            </div>
            <div>
                <div className='bg-orange-400 px-4 py-2 rounded-lg md:px-6 md:py-3 md:text-2xl'>Sign In</div>
            </div>
        </div>
    </div>
  );
}
