import React from 'react'

export const FuhnancePower = () => {
   
  return (
    <>
        <section className='bg-dark-black py-20'>
            <div className='container m-auto'>
                <div className='grid grid-cols-2 gap-12 items-center '>
                    <div>
                        <div className='mb-3'>
                            <h2 className='text-white text-xs font-medium mb-5'>Fuhnance <span className='text-blue'>powers the Trade</span></h2>
                            <div className='flex gap-4 '>
                                <div>
                                    <img src='./images/pseudo.png' alt='' className='w-11' />
                                </div>
                                <div>
                                    <h6 className='text-white text-[20px] font-medium'>Stock</h6>
                                    <p className='text-white font-extralight'>We invest in educational initiatives around the world, to advance the understanding of Bitcoin and to foster greater financial education and inclusion</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            
                            <div className='flex gap-4'>
                                <div>
                                    <img src='./images/pseudo.png' alt='' className='w-11' />
                                </div>
                                <div>
                                    <h6 className='text-white text-[20px] font-medium'>Forex</h6>
                                    <p className='text-white font-extralight'>We invest in educational initiatives around the world, to advance the understanding of Bitcoin and to foster greater financial education and inclusion</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            
                            <div className='flex gap-4'>
                                <div>
                                    <img src='./images/pseudo.png' alt='' className='w-11' />
                                </div>
                                <div>
                                    <h6 className='text-white text-[20px] font-medium'>Options</h6>
                                    <p className='text-white font-extralight'>We invest in educational initiatives around the world, to advance the understanding of Bitcoin and to foster greater financial education and inclusion</p>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="bg-blue text-white py-3 px-5 rounded mt-4 inline-block">Get Started</a>
                    </div>
                    <div>
                        <img src='./images/power.png' alt='' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
