import React from 'react';
import { Heading } from "../../global/heading/Heading";

export const MarketResearch = () => {
  return (
    <>
        <section className='bg-dark md:py-20 py-14'>
            <div className='container m-auto side-padding'>
                <Heading heading="Sharpen your strategy with curated market research" /> 
                <p className='text-white md:text-sm text-1x1 text-center pt-2 md:pt-0'>Get financially prepared for whatever life throws your way with help from Fuhance.</p>
                <div className='grid md:grid-cols-2 grid-cols-1 items-center lg:gap-20 gap-8 container m-auto pt-12'>
                    <div>
                        <img src="./images/product-stock.png" alt="" />
                    </div>
                    <div>
                        <h2 className='md:text-xs text-md text-white'>Be your best trader with Fuhnance</h2>
                        <p className='text-white py-5'>Do you want to quickly take the pulse of a market or research ESG-focused investments? From live market updates to in-depth macro analysis, your Saxo account gives you access to impactful insights, directly in your trading platform.</p>
                        <a href="#" className="bg-blue text-white py-3 px-5 rounded mt-4 inline-block">Get Started</a>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}
