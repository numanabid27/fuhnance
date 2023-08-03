import React from 'react'

export const Counter = ({data}) => {
  return (
    <>
        <section className='bg-dark-color py-10 px-1'>
            <div className='grid gap-4 md:grid-cols-5 grid-cols-2 container m-auto side-padding'>
                {data.map(({title, para}, i)=>{
                    return(
                        <div key={i.toString()} className='text-center'>
                            <h3 className='lg:text-[48px] md:text-xs text-[24px] text-white font-semibold'>{title}</h3>
                            <p className='md:text-sm text-1x1 text-white'>{para}</p>
                        </div>
                    )
                })}
            </div>
        </section>  
    </>
  )
}
