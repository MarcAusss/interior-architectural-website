import Image from "next/image";



export default function ShowcaseSection() {
    return (
        <div>   
            <div className="md:my-20 my-10 px-6 md:px-0">
                <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left items-center">
                    <h1 className="text-[29px] md:text-4xl ">THE RENOVA PHILOSOPHY</h1>
                    <p className="w-full md:w-[30%]">
                        Purpose first, beauty always, We blend functional planning.
                        enduring design language, and carefully curated natural materials 
                        to create spaces that feel deeply personal.
                    </p>
                </div> 
                <div className="flex md:flex-row flex-col justify-between gap-5 my-8">
                    <div className="border-2 border-gray-200 w-full h-50 md:h-137.5 relative">
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-black/20 z-10" />
                        <Image src="/images/image-2.png" alt="" className="object-cover" fill/>
                        <div className="flex flex-col text-white justify-between w-full h-full p-5 relative z-20">
                            <h1 className="">01</h1>
                            <div className="">
                                <h1 className="">Function First</h1>
                                <p className=" ">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-gray-200 w-full h-50 md:h-137.5 relative">
                        <Image src="/images/Screenshot 2026-02-23 120956.png" className="object-cover" alt="" fill/>
                        <div className="flex flex-col justify-between w-full h-full p-5 relative z-20">
                            <h1 className="">01</h1>
                            <div className="">
                                <h1 className="">Function First</h1>
                                <p className=" ">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-gray-200 w-full h-50 md:h-137.5 relative">
                        <Image src="/images/Screenshot 2026-02-23 121022.png" alt="" className="object-cover" fill/>
                        <div className="flex flex-col justify-between w-full h-full p-5 relative z-20">
                            <h1 className="">01</h1>
                            <div className="">
                                <h1 className="">Function First</h1>
                                <p className=" ">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}