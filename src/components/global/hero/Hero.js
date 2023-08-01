import React from 'react'

export const Hero = ({ bg, heading, para, height }) => {

  return (
    <>
      <section style={{ backgroundImage: bg }} className='bg-cover bg-no-repeat'>
        <div className={`${height ? "h-screen" : "h-96"} text-center container m-auto`}>
          <div className={`${height ? "h-full" : "h-full"} flex justify-center items-center  flex-col`}>
            <h1 className='text-white text-xl font-semibold leading-[1.2] max-w-[1051px]'>{heading}</h1>
            <p className='text-white text-md py-9 max-w-[764px]'>{para}</p>
            {height && <>
              <a href='#' className='text-white bg-blue inline-flex items-center text-sm px-7 py-2 h- rounded-sm'>Start Trading <img src='./images/right-arrow.png' alt='' className='w-[10px] ml-2' /></a>
            </>}
          </div>
        </div>
      </section>
    </>
  )
}
