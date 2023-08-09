import React from 'react'
import { Heading } from '../heading/Heading'

export const Innovation = ({data, heading, para, styles}) => {
   
  return (
    <>
        <section className={`${styles && "bg-dark"} md:py-20 py-16`}>
            <div className='container m-auto side-padding'>
                <Heading heading = {heading} /> 
                <p className='text-white text-center pt-2 md:pt-0'>{para}</p>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5  mt-14'>
                    {
                        data.map(({img, title, para}, i)=>{
                            return(
                                <div className={`${styles ? "bg-dark-color" : "bg-dark"} py-6 px-5 rounded`} key={i.toString()}>
                                    <img src={img} alt="" className={`${styles && "w-[30px]"} lg:w-[14%] w-[50px]`}/>
                                    <h6 className='text-white text-[20px] py-5'>{title}</h6>
                                    <p className='text-[#AAAAAA] text-[14px] '>{para}</p>
                                </div>
                            )
                        })
                    }
                    <div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
