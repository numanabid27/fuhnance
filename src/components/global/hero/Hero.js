import React from 'react'

export const Hero = ({ bg, heading, para, height }) => {

  return (
    <>
      <section style={{ backgroundImage: bg }} className='bg-cover bg-no-repeat'>
        <div className={`${height ? "lg:h-screen h-[80vh]" : "h-96"} text-center container m-auto side-padding`}>
          <div className={`${height ? "h-full" : "h-full"} flex justify-center items-center  flex-col`}>
            <h1 className='text-white xl:text-xl lg:text-2xl text-xs md:text-lg font-semibold leading-[1.2] max-w-[1051px]'>{heading}</h1>
            <p className='text-white lg:text-md md:text-[20px] text-1x1 py-9 max-w-[764px]'>{para}</p>
            {height && <>
              <a href='#' className='text-white bg-blue inline-flex items-center md:text-sm text-1x1 px-7 py-2  rounded'>Start Trading <img src='./images/right-arrow.png' alt='' className='w-[12px] ml-2' /></a>
            </>}
          </div>
        </div>
      </section>
    </>
  )
}
