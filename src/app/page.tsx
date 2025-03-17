"use client"; // Ensure this is a Client Component
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(null); // Use null as initial state to avoid rendering images during SSR

  useEffect(() => {
    // Only run on client side
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind 'md' breakpoint
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent rendering until isMobile is determined
  if (isMobile === null) {
    return null; // Or a loading placeholder if desired
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 -z-10 overflow-hidden">
        <Image
          src={isMobile ? "/images/home-mobile.svg" : "/images/home.svg"}
          alt="Home"
          width={0}
          height={0}
          sizes="100vw" // Explicitly set for full-width optimization
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="flex flex-col items-center gap-5">
        <div>
          <h1 className="text-2xl text-center font-bold md:text-5xl">
            One place to track <br /> all you{" "}
            <span className="text-orange-500">manga</span>
          </h1>
        </div>
        <div>
          <div className="bg-orange-400 px-4 py-2 rounded-lg md:px-6 md:py-3 md:text-2xl">
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
}
