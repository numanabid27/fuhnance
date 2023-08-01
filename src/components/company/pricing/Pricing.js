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
            <section className='py-20 bg-[#0D0D0D]'>
                <div className='container m-auto '>
                    <Heading heading="Make the wise decision for your business" />
                    <p className='text-[#A1A1AA] text-sm text-center'>Choose  your plan</p>

                    <div className='grid grid-cols-3 gap-7 mt-14'>
                        {
                            data.map(({ title, price, para, list }, i) => {
                                return (
                                    <div className='py-8 px-7 rounded bg-[#1C1C1F]' key={i.toString()}>
                                        <h6 className='text-white text-sm'>{title}</h6>
                                        <h3 className='text-white text-[60px] font-semibold'>{price} <span className='text-grey text-[16px] -ml-3'>/ month</span></h3>
                                        <p className='text-grey pt-2 pb-5'>{para}</p>
                                        <ul className='price_list py-6'>
                                            {list.map((item, i) => {
                                                return (
                                                    <li key={i.toString()} className='text-white flex items-center mb-2 '>
                                                        <img src='./images/checkcircle.png' alt='' className='w-[24px] mr-2' />
                                                        {item}
                                                        <img src='./images/icon.png' alt='' className='w-[17px] h-[17px] ml-2' />
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <a href='#' className='text-white py-3 px-4 trail-btn text-center block rounded'>Get 14 Days Free Trial</a>
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
