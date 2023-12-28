import Image, { StaticImageData } from "next/image"
import { useState } from "react"
const PalestinBannerSection = () => {
    const [docs, setDocs] = useState(0)
    const oneOffBtnList = [{ title: "50", doc: "Could provide food supplies for Palestinians." },
    { title: "100", doc: "Could help provide a range of medical consumables to support the injured." },
    { title: "100", doc: "Could provide 15 Palestinians with 2 life-saving nutritious food packs each." },
    { title: "200", doc: "Could provide critical medical supplies to aid the injured." },
    { title: "300", doc: "Could provide 50 Palestinians with 6 nutritious food packs each." },
    { title: "900", doc: "Could provide 9 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians." },
    { title: "1500", doc: "Could provide 15 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians." },
    { title: "3000", doc: "Could provide 15 x Critical Medical Packs to provide emergency medical assistance for over 100 Palestinians." }

    ]

    return (<div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-2">
                <h3 className="text-3xl text-gray-800">Palestine Emergency</h3>
                <span className="w-full h-[2px] bg-orange-500"></span>
                <div className="grid grid-cols-2">
                    <button className="p-3 bg-gray-100 focus:bg-orange-500 focus:text-white text-lg ">One Off</button>
                    <button className="p-3 bg-gray-100 focus:bg-orange-500 focus:text-white text-lg">Monthly</button>
                </div>
                <div className="flex flex-col shadow-2xl px-5">

                    <select className="focus:outline-none border-2 border-gray-400 rounded-xl px-3 py-2"><span className="p-3"><span>Palestine </span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /> </svg></span>
                        <option className="text-md ">Palestine </option>
                    </select>
                    <p className="text-base py-4">{oneOffBtnList[docs].doc}</p>
                    <div className="grid grid-cols-3 gap-5 pr-8 pb-8">
                        {oneOffBtnList.map((btn, index) => <button key={index} className="border-2 border-gray-300 hover:bg-gray-300 focus:bg-orange-500 focus:text-white p-2 rounded-xl" onClick={() => setDocs(index)}>£{btn.title}</button>)}
                    </div>
                    <input type="number" placeholder="Other Amount" className="focus:outline-none border-2 border-gray-400 rounded-xl p-4 py-2 " />
                    <p className="text-base">Your donations will go to this appeal's general fund, so your generosity can help where it's needed most!</p>
                    <button className="bg-orange-600 hover:opacity-90 text-white font-medium p-3 rounded-lg mt-4 mb-2">Add to Basket</button>
                </div>
            </div>

            <div className="col-span-2">
                <Image src={"/images/palestinEmergency/WebsiteMobilebanner.jpg"} alt="" width={500} height={500} className=" w-[450px] h-[250px]  lg:w-[500px] lg:h-[300px] xl:w-[800px] xl:h-[500px]" />
            </div>
        </div>
    </div>)
}
export default PalestinBannerSection