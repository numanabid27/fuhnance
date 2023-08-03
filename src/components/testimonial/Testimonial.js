import React from 'react';
import { Heading } from '../global/heading/Heading';
import { Data } from '../../data/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from 'react';

export const Testimonial = () => {
    const swiperRef = useRef(null);
    return (
        <>
            <section className='bg-dark py-20'>
                <div>
                    <Heading heading="Testimonial" />

                    <div className='bg-dark-color relative py-8 px-5'>
                        <div className='container m-auto'>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                
                                onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                                }}
                                className="mySwiper"
                            >
                                {
                                    Data.clientsData.map(({ clientName, designation, desc, clinetImg }, i) => {
                                        return (
                                            <div>
                                                <SwiperSlide key={i.toString()}>
                                                    <div className='flex items-center justify-between'>
                                                        <div className='p-5 w-1/3 bg-dark'>
                                                            <h4 className='text-white font-extrabold'>{clientName}</h4>
                                                            <p className='text-[#C4C4C4] font-extralight text-[12px]'>{designation}</p>
                                                            <h6 className='text-[#C4C4C4] font-extralight text-[14px]'>{desc}</h6>
                                                            <img src="./images/star.png" alt="" className='w-36' />
                                                        </div>
                                                        <div className=''>
                                                            <img src={clinetImg} alt="" className='client_img'/>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        )
                                    })
                                }
                            </Swiper>

                            {/* <button
                                className="prev-btn absolute z-10 m-auto"
                                onClick={() => swiperRef.current?.slidePrev()}
                                >
                                df
                                </button>
                                <button
                                className="next-btn absolute z-10 m-auto"
                                onClick={() => swiperRef.current?.slideNext()}
                                >
                               fdff
                                </button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

