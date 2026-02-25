import Image from "next/image";



export default function ProjectSection() {
    return (
        <div className="w-full h-[80vh] relative">
            <Image src="/images/image-2.png" alt="" className="object-cover" fill/>
            <div className="max-w-365 mx-auto py-10">
                <div className="flex flex-col justify-between">
                    <h1 className="text-white">2/ <span className="text-gray-300">4</span></h1>
                    <div className="flex">
                        <div className="flex w-1/2 justify-between border-b border-gray-300">
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
                                <div className="w-1/2 h-full relative">
                                    <Image src="/images/image-2.png" alt="" className="object-cover" fill/>
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
    );
}