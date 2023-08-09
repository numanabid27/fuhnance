import React from 'react'

export const StartingFuhnance = () => {
  return (
    <>
        <section className='bg-cover bg-no-repeat md:py-20 py-16 bg-center' style={{backgroundImage:"url('./images/getting.png')"}}>
            <div className='text-center container m-auto side-padding'>
                <img src="./images/getting-logo.png" alt="" className='m-auto md:w-[300px] w-[250px]' />
                <h2 className='text-white lg:text-lg md:text-xs text-md font-semibold py-5'>Getting Started With Fuhnance</h2>
                <a href='#' className='text-white bg-blue inline-flex items-center md:text-sm text-1x1 px-7 py-2 rounded-sm'>Start Trading <img src='./images/right-arrow.png' alt='' className='w-[12px] ml-2' /></a>
            </div>
        </section>
    </>
  )
}
