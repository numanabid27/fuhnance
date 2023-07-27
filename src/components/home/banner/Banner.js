import React from 'react'

export const Banner = () => {
  return (
    <>
      <section className='bg-cover bg-no-repeat pb-[107px]' style={{ backgroundImage: "url('./images/hero.png')" }}>
        <div className='container m-auto'>
          <div className='text-center pt-14 m-auto max-w-3xl'>
            <h1 className='text-white text-xl font-semibold leading-[0.99]'><span className='text-blue'>Invest</span> and trade your way</h1>
            <p className='text-white text-md font-normal py-8'>Trade with algorithms, connect with apps, and build services with our easy to use platform.</p>
            <a href='#' className='text-white bg-blue inline-flex items-center text-sm px-7 py-2 rounded-sm'>Start Trading <img src='./images/right-arrow.png' alt='' className='w-[10px] ml-2' /></a>
            <img src='./images/laptop.png' alt='' className='m-auto w-3/4' />
          </div>
        </div>
      </section>
    </>
  )
}
