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
                <div className='container m-auto'>
                    <Heading heading="Testimonial" />

                    <div className='bg-dark-color'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

