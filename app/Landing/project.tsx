import Image from "next/image";



export default function ProjectSection() {
    return (
        <>
            <div className="w-full h-[75vh] relative">
                <Image src="/images/image-2.png" alt="" className="object-cover" fill/>
                <div className="max-w-365 mx-auto py-10 h-[80vh]">
                    <div className="flex flex-col justify-between relative z-20 h-full">
                        <h1 className="text-white">2/ <span className="text-gray-300">4</span></h1>
                        <div className="flex items-center">
                            <div className="flex w-1/2 justify-between border-b border-gray-300 h-fit pr-5">
                                <h1 className="my-3 text-gray-300">2017</h1>
                                <h1 className="my-3 text-white">2019</h1>
                            </div>
                            <div className="w-[60vw] bg-white p-5">
                                <div className="flex items-end justify-between">
                                    <div className="">
                                        <h1 className="">
                                            FIRST FULL-SCALE <br />
                                            RESIDENTIAL PROJECT
                                        </h1>   
                                        <p className="">
                                            completed a comprehensive home transformation that <br />
                                            defined Renova&apos;s material-lead and timeless approach.
                                        </p>
                                    </div>    
                                    <div className="w-96 h-96 relative">
                                        <Image src="/images/image 15.png" alt="" className="object-cover" fill/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <button>left</button>
                            <button>right</button>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="flex my-20 gap-20">
                <h1 className="text-[50px]"> Lorem</h1>
                <h1 className="text-[50px]"> CRAFTED INTERIOR SPACES /</h1>
                <h1 className="text-[50px]"> <i>TIMELESS </i> DESIGN</h1>
            </div>
        </>
    );
}