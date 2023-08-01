import React from 'react'
import { Heading } from '../heading/Heading'

export const TaradeWay = ({tradeWay, heading,para}) => {
   
  return (
    <>
        <section className='bg-dark-color py-20'>
            <div className='container m-auto'>
                <Heading heading={heading} />
                <p className='text-white text-sm text-center'>{para}</p>

                <div className='grid grid-cols-3 gap-20 mt-14' >
                    {
                        tradeWay.map(({img, title, para}, i)=>{
                            return(
                                <div className='text-center' key={i.toString()}>
                                    <img src={img} alt='' className='w-[15%] m-auto' />
                                    <h6 className='text-white text-[20px] py-3'>{title}</h6>
                                    <p className='text-grey text-[14px]'>{para}</p>
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
