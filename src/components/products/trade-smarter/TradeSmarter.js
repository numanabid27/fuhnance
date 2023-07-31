import React from 'react'
import { Heading } from '../../global/heading/Heading'

export const TradeSmarter = () => {
    const data = [
        {   
            img: "./images/tickk.png",
            title : "Practice your strategy",
            para : "Create your trading account to explore our intuitive trading platform and enhance your skills"
        },
        {   
            img: "./images/tickk.png",
            title : "Expand your knowledge",
            para : "Learn about trading CFDs with Fuhnance using our comprehensive educational materials"
        },
        {   
            img: "./images/tickk.png",
            title : "Manage your risks",
            para : "Use our advanced risk management tools to limit your losses and lock in profits"
        },
    ]
  return (
    <>
        <section className='py-20 bg-dark'>
            <div className='container m-auto'>
                <Heading heading="Trade smarter" />
                <p className='text-white text-center text-sm'>See why we're the trading partner of choice for hundreds of thousands of traders worldwide.</p>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        data.map(({img, title, para}, i)=>{
                            return(
                                <div className='text-center mt-16' key={i.toString()}>
                                    <img src={img} alt='' className='w-[10%] m-auto' />
                                    <h6 className='text-white text-[20px] py-4'>{title}</h6>
                                    <p className=' text-[14px] text-[#ADADAD]'>{para}</p>
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
