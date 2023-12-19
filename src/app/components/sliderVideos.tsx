import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { sliderVideoSection } from "../components/allData"
import Image from 'next/image';
export default function SliderVideo() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                direction={'horizontal'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="flex justify-center  items-center w-full h-[390px] "
            >
                {sliderVideoSection.map(p => {
                    return <SwiperSlide className=" ">
                        {/* <h2 className="text-white text-9xl font-bold absolute top-16">{p.uperTitle}</h2> */}
                        <Image src={p.img} alt="images" width={60000} height={60000} className="h-[400px] w-[500px] p-24" />
                        {/* <h2 className="text-white text-9xl font-bold absolute bottom-16 right-0">{p.downTitle}</h2> */}
                    </SwiperSlide>
                })
                }

            </Swiper>
        </>
    );
}
