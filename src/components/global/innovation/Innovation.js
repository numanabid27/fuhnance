import React from 'react'
import { Heading } from '../heading/Heading'

export const Innovation = ({data, heading, para, styles}) => {
   
  return (
    <>
        <section className={`${styles && "bg-dark"} py-20`}>
            <Heading heading = {heading} /> 
            <p className='text-white text-center'>{para}</p>
            <div className='grid grid-cols-3 gap-5 container m-auto mt-14'>
                {
                    data.map(({img, title, para}, i)=>{
                        return(
                            <div className={`${styles ? "bg-dark-color" : "bg-dark"} p-5 rounded`} key={i.toString()}>
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
