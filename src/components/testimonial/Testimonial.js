import React from 'react';
import { Heading } from '../global/heading/Heading';
import { Data } from '../../data/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

export const Testimonial = () => {
    const swiperRef = useRef(null);
    return (
        <>
            <section className='bg-dark md:py-20 py-16 testimonial_Sec'>
                <div>
                    <Heading heading="Testimonials" />
                    <div className='slide_Bg'></div>
                    <div className='pt-8 px-5 '>
                        <div className='container m-auto'>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {
                                    Data.clientsData.map(({ clientName, designation, desc, clinetImg }, i) => {
                                        return (
                                            <SwiperSlide key={i.toString()}>
                                                <div className='flex items-center justify-between slide_row'>
                                                    <div className='flex slide-col1'>
                                                        <div className='quote_img'>
                                                            <img src="./images/quote.png" alt="" className='w-16' />
                                                        </div>
                                                        <div className='md:px-5 px-9 py-5 w-full bg-dark md:ml-4 ml-0 mobile_Slide'>
                                                            <h4 className='text-white font-extrabold'>{clientName}</h4>
                                                            <p className='text-[#CACACA] font-normal text-[12px] pt-1'>{designation}</p>
                                                            <h6 className='text-[#C4C4C4] font-normal text-[14px] pt-5 pb-5'>{desc}</h6>
                                                            <img src="./images/star.png" alt="" className='w-36 pb-8' />
                                                        </div>
                                                    </div>
                                                    <div className='slide-col2'>
                                                        <img src={clinetImg} alt="" className='client_img' />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>

                            <div className='slide_arrows'>
                                <button
                                    className="prev-btn z-10 mr-4"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <img src="./images/leftArrow.png" alt=""/>
                                </button>
                                <button
                                    className="next-btn z-10 m-auto"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <img src="./images/rightArrow.png" alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

