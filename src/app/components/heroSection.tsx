import Image, { StaticImageData } from "next/image"
import image from "../../../public/shooping.jpg"
type img = {
    imag:StaticImageData
}
const imageData:img = {imag:image}
const HeroSection = () => {
    return(<div>
        <Image src={imageData.imag.src} alt="" width={500} height={500} className=" w-[450px] h-[250px]  lg:w-[500px] lg:h-[300px] xl:w-[800px] xl:h-[500px]"/>
    </div>)
}
export default HeroSection