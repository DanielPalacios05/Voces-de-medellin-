import Image, { StaticImageData } from "next/image";
export default function PlayerCard({image, title} : {image : StaticImageData, title:string} ){

    return(
        <div className="w-60 h-[100%] text-center border-8 p-5 backdrop-blur-md border-white rounded-xl ">
            <div className="m-4">
            <p className="text-3xl font-bold mb-6">{title}</p>
            <div className="flex justify-center">
            <Image width={300} src={image} alt={title}></Image>
            </div>
            </div>  
        </div>
    )
}