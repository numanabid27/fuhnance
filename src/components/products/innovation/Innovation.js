import React from 'react'
import { Heading } from '../../global/heading/Heading'

export const Innovation = () => {
    const data = [
        {
            img:"./images/lock.png",
            title:"Account Shield",
            para:"The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
        },
        {
             img:"./images/lock.png",
            title:"Stop Orders",
            para:"The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
        },
        {
             img:"./images/lock.png",
            title:"Cancel all Orders",
            para:"The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
        },
        {
             img:"./images/lock.png",
            title:"Margin Breakdown",
            para:"The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
        },
        {
             img:"./images/lock.png",
            title:"Margin Alerts",
            para:"The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
        },
        {
             img:"./images/lock.png",
            title:"Quick Close Positions",
            para:"The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
        },
    ]
  return (
    <>
        <section className='py-20'>
            <Heading heading = {<>Innovative <span className='text-blue'>risk-free</span> features</>} /> 
            <p className='text-white text-center'>Discover unique tools to manage your risk and control your positions.</p>
            <div className='grid grid-cols-3 gap-5 container m-auto mt-14'>
                {
                    data.map(({img, title, para}, i)=>{
                        return(
                            <div className='bg-dark p-5 rounded' key={i.toString()}>
                                <img src={img} alt="" className='w-[10%]'/>
                                <h6 className='text-white text-[20px] py-3'>{title}</h6>
                                <p className='text-[#AAAAAA] text-[14px] '>{para}</p>
                            </div>
                        )
                    })
                }
                <div>

                </div>
            </div>
        </section>
    </>
  )
}
