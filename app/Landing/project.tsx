import Image from "next/image";



export default function ProjectSection() {
    return (
        <div>
            <div className="w-full h-[80vh] relative">
                <Image src="/images/image-2.png" alt="" className="object-cover" fill/>
            </div>            
        </div>
    );
}