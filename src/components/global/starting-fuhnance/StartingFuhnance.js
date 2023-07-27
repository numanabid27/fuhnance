import React from 'react'

export const StartingFuhnance = () => {
  return (
    <>
        <section className='bg-cover bg-no-repeat py-14 bg-center' style={{backgroundImage:"url('./images/getting.png')"}}>
            <div className='text-center container m-auto'>
                <img src="./images/getting-logo.png" alt="" className='m-auto w-[300px]' />
                <h2 className='text-white text-lg font-semibold py-5'>Getting Started with Fuhnance</h2>
                <a href='#' className='text-white bg-blue inline-flex items-center text-sm px-7 py-2 rounded-sm'>Start Trading <img src='./images/right-arrow.png' alt='' className='w-[10px] ml-2' /></a>
            </div>
        </section>
    </>
  )
}
