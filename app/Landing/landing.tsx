"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" >
            <source src="/videos/LUXURY INTERIOR DESIGN_ for spending the best life.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70 z-10" />
  
        <div className="relative z-20 max-w-365 mx-auto h-full">
        
            <div className="flex items-center h-full justify-center">
                <h1 className="text-4xl md:text-7xl text-white text-center">
                    TIMELESS COMFORT
                </h1>
            </div>
   
            <div className="flex flex-col items-center md:flex-row md:justify-between w-full absolute bottom-10 left-0 px-6 md:px-0">
                <p className="text-center md:text-left text-white max-w-xl">
                    Renova is a design studio built on the belief that interiors <br />
                    should feel effortless, warm, and deeply personal.
                </p>
                <div className="flex gap-5 mt-6 md:mt-0">
                    <Link href="/contact/" className="text-white border-b border-white py-2 px-3 hover:opacity-80 transition" >
                        Book Consultation
                    </Link>

                    <Link href="/project/" className="text-white border-b border-white py-2 px-3 hover:opacity-80 transition" >
                        View Projects
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}