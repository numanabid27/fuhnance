import React from 'react'
import { Heading } from '../global/heading/Heading';
import { Data } from '../../data/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Testimonial = () => {
    console.log(Data.clientsData)
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
                                onSwiper={(swiper) => console.log(swiper)}
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
                                                            <img src="./images/client.png" alt="" className='client_img'/>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

