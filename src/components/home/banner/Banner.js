import React from 'react'

export const Banner = () => {
  return (
    <>
      <section className='bg-cover bg-no-repeat lg:pb-[107px] p-[1px]' style={{ backgroundImage: "url('./images/hero.png')" }}>
        <div className='container m-auto side-padding'>
          <div className='text-center md:pt-16 pt-8 m-auto max-w-3xl'>
            <h1 className='text-white xl:text-xl lg:text-2xl text-xs md:text-lg font-semibold leading-[0.99]'><span className='text-blue'>Invest</span> and trade your way</h1>
            <p className='text-white lg:text-md md:text-[20px] text-1x1 font-normal py-8'>Trade with algorithms, connect with apps, and build services with our easy to use platform.</p>
            <a href='#' className='text-white bg-blue inline-flex items-center md:text text-1x1-sm px-7 py-2 rounded'>Start Trading <img src='./images/right-arrow.png' alt='' className='w-[12px] ml-2' /></a>
            <img src='./images/laptop.png' alt='' className='m-auto lg:w-3/4 w-1/2 banner_img ' />
          </div>
        </div>
      </section>
    </>
  )
}
