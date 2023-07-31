import React from 'react'

export const Banner = () => {
  return (
    <>
      <section className='bg-cover bg-no-repeat pb-[107px]' style={{ backgroundImage: "url('./images/platform-banner.png')" }}>
        <div className='container m-auto'>
          <div className='text-center pt-14 m-auto max-w-4xl'>
            <img src="./images/trade.png" alt="" className='my-14'/>
            
            <div className='flex justify-between mr-auto max-w-[605px]'>
                <div>
                    <h6 className='black text-[48px]'>0</h6>
                    <p className='black text-sm'>Instrument</p>
                </div>
                <div>
                    <h6 className='black text-[48px]'>0</h6>
                    <p className='black text-sm'>Registered Customers</p>  
                </div>
                <div>
                    <h6 className='black text-[48px]'>0</h6>
                    <p className='black text-sm'>Traded Value</p>
                </div>
            </div>

            <a href='#' className='text-white bg-blue inline-flex items-center text-sm px-7 py-2 rounded-sm mt-[112px]'>Start Trading <img src='./images/right-arrow.png' alt='' className='w-[10px] ml-2' /></a>
          </div>
        </div>
      </section>
    </>
  )
}
