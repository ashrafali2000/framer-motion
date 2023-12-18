"use client"
import Image from "next/image"
import {defaultHomeDataHeroSection} from "../components/allData"

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';


import { Pagination } from 'swiper/modules';
const DefaulHomeHeroSecton = () => {
    // return <div>
      {/* <div>
        {defaultHomeDataHeroSection.map(p => {
            return <div className="bg-gray-700 p-32">
                <h2 className="text-white text-4xl font-bold">{p.uperTitle}</h2>
                <Image src={p.img} alt="images"  width={500} height={500} className="w-[500px] h-[500px]"/>
                 <h2 className="text-white text-4xl font-bold">{p.downTitle}</h2>
                </div>
        })
            }
      </div> */}


// export default function App() {
  return (
    < div className=" p-20 " style={{
        backgroundColor:"#272727"
    }}>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="flex justify-center gap-4 items-center w-full h-[790px] "
        style={{
            // height: "calc(100vh)",
            // height: "calc(100vh)",
            // width:"96vw"
        }}
      >
          {defaultHomeDataHeroSection.map(p => {
            return <SwiperSlide className=" ">
                <h2 className="text-white text-9xl font-bold absolute top-16">{p.uperTitle}</h2>
                <Image src={p.img} alt="images"  width={60000} height={60000} className="h-[790px] w-[1300px] p-24" style={{
                 
                }}/>
                 <h2 className="text-white text-9xl font-bold absolute bottom-16 right-0">{p.downTitle}</h2>
                </SwiperSlide>
        })
            }
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
    // </div>
// }
export default DefaulHomeHeroSecton;