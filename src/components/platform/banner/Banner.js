import React from 'react'

export const Banner = () => {
  return (
    <>
      <section className='bg-no-repeat xl:pb-[201px] md:pb-[133px] pb-[40px] banner' style={{ backgroundImage: "url('./images/platform-banner.png')"}}>
        <div className='container m-auto side-padding'>
          <div className='text-center pt-14 m-auto max-w-4xl'>
            <img src="./images/trade.png" alt="" className='lg:my-14 my-0 lg:w-full w-[80%] m-auto'/>
            
            <div className='flex justify-between mr-auto max-w-[605px] md:mt-0 mt-6'>
                <div>
                    <h6 className='black md:text-[48px] text-sm'>0</h6>
                    <p className='black md:text-sm text-1x1'>Instrument</p>
                </div>
                <div>
                    <h6 className='black md:text-[48px] text-sm'>0</h6>
                    <p className='black md:text-sm text-1x1'>Registered Customers</p>  
                </div>
                <div>
                    <h6 className='black md:text-[48px] text-sm'>0</h6>
                    <p className='black md:text-sm text-1x1'>Traded Value</p>
                </div>
            </div>

            <a href='#' className='text-white bg-blue inline-flex items-center md:text-sm text-1x1 px-7 md:py-3 py-2 rounded md:mt-[112px] mt-[50px]'>Start Trading <img src='./images/right-arrow.png' alt='' className='w-[15px] ml-2' /></a>
          </div>
        </div>
      </section>
    </>
  )
}
