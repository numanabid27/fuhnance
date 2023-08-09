import React from 'react'
import { Heading } from '../heading/Heading'

export const TaradeWay = ({tradeWay, heading,para,styling, spacing}) => {
   
  return (
    <>
        <section className='bg-dark-color md:py-20 py-16'>
            <div className='container m-auto side-padding'>
                <Heading heading={heading} />
                <p className='text-white md:text-sm text-1x1 pt-2 md:pt-0 text-center'>{para}</p>

                <div className='grid md:grid-cols-3 grid-cols-1 lg:gap-20 gap-8 mt-14' >
                    {
                        tradeWay.map(({img, title, para}, i)=>{
                            return(
                                <div className={`${styling ? "text-left" : "text-center"}`} key={i.toString()}>
                                    <img src={img} alt='' className={`${styling ? "m-0" : "m-auto"} w-[15%]`} />
                                    <h6 className='text-white text-[20px] py-3 font-semibold'>{title}</h6>
                                    <p className={`${spacing && "max-w-[313px] m-auto"} text-grey text-[14px]`}>{para}</p>
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
