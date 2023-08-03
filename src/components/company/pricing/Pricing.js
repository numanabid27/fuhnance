import React from 'react';
import { Heading } from "../../../components/global/heading/Heading";

export const Pricing = () => {
    const data = [
        {
            title: "Personal",
            price: "$19",
            para: "All the basic features to boost your freelance career",
            list: [
                "Full Access", "100 GB Free Storage", "Unlimited Visitors", "10 Agents", "Live Chat Support"
            ]
        },
        {
            title: "Professional",
            price: "$49",
            para: "All the basic features to boost your freelance career",
            list: [
                "Full Access", "100 GB Free Storage", "Unlimited Visitors", "10 Agents", "Live Chat Support"
            ]
        },
        {
            title: "Business",
            price: "$99",
            para: "All the basic features to boost your freelance career",
            list: [
                "Full Access", "100 GB Free Storage", "Unlimited Visitors", "10 Agents", "Live Chat Support"
            ]
        },
    ]
    return (
        <>
            <section className='md:py-20 py-16 bg-[#0D0D0D]'>
                <div className='container m-auto side-padding'>
                    <Heading heading="Make the wise decision for your business" />
                    <p className='text-[#A1A1AA] text-sm text-center pt-2 md:pt-0'>Choose  your plan</p>

                    <div className='grid md:grid-cols-3 grid-col-1 lg:gap-7 gap-5 mt-14 '>
                        {
                            data.map(({ title, price, para, list }, i) => {
                                return (
                                    <div className='py-8 lg:px-7 px-5 rounded bg-[#1C1C1F]' key={i.toString()}>
                                        <h6 className='text-white text-sm'>{title}</h6>
                                        <h3 className='text-white lg:text-[60px] md:text-[50px] text-lg font-semibold'>{price} <span className='text-grey text-[16px] md:-ml-3 -ml-1'>/ month</span></h3>
                                        <p className='text-grey pt-2 pb-5'>{para}</p>
                                        <ul className='price_list py-6'>
                                            {list.map((item, i) => {
                                                return (
                                                    <li key={i.toString()} className='text-white flex items-center mb-2 lg:text-1x1 text-[14px]'>
                                                        <img src='./images/checkcircle.png' alt='' className='w-[24px] mr-2' />
                                                        {item}
                                                        <img src='./images/icon.png' alt='' className='w-[17px] h-[17px] ml-2' />
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <a href='#' className='text-white py-3 px-4 trail-btn text-center block rounded lg:text-1x1 text-[14px]'>Get 14 Days Free Trial</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}
