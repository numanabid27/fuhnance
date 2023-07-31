import React from 'react';
import { Heading } from "../../global/heading/Heading";

export const MarketResearch = () => {
  return (
    <>
        <section className='bg-dark py-20'>
            <div className='container m-auto'>
                <Heading heading="Sharpen your strategy with curated market research" /> 
                <p className='text-white text-sm text-center'>Get financially prepared for whatever life throws your way with help from Fuhance.</p>
                <div className='grid grid-cols-2 items-center gap-20 container m-auto pt-12'>
                    <div>
                        <img src="./images/product-stock.png" alt="" />
                    </div>
                    <div>
                        <h2 className='text-xs text-white'>Be your best trader with Fuhnance</h2>
                        <p className='text-white py-5'>Do you want to quickly take the pulse of a market or research ESG-focused investments? From live market updates to in-depth macro analysis, your Saxo account gives you access to impactful insights, directly in your trading platform.</p>
                        <a href="#" className="bg-blue text-white py-3 px-5 rounded mt-4 inline-block">Get Started</a>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}
