import React from 'react'

export const Counter = ({data}) => {
  return (
    <>
        <section className='bg-dark-color py-10 px-1'>
            <div className='grid gap-4 grid-cols-5 container m-auto'>
                {data.map(({title, para}, i)=>{
                    return(
                        <div key={i.toString()} className='text-center'>
                            <h3 className='text-[48px] text-white font-semibold'>{title}</h3>
                            <p className='text-sm text-white'>{para}</p>
                        </div>
                    )
                })}
            </div>
        </section>  
    </>
  )
}
