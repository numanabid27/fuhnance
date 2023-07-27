import React from 'react'
import { Heading } from '../../global/heading/Heading'

export const FuhnanceProducts = () => {
    const data = [
        {
            heading : "Stocks",
            title : "Trade over 80 FX pairs, with a EUR/USD spread as little as 0.2 and low commissions.",
            btn : "Start Trading >"
        },
        {
            heading : "Stocks",
            title : "Trade over 80 FX pairs, with a EUR/USD spread as little as 0.2 and low commissions.",
            btn : "Start Trading >"
        },
        {
            heading : "Stocks",
            title : "Trade over 80 FX pairs, with a EUR/USD spread as little as 0.2 and low commissions.",
            btn : "Start Trading >"
        },
    ]
  return (
    <>
        <section className='relative sec py-9'>
            <Heading heading="Fuhnance Products" />
            <p className='text-white text-sm font-normal text-center'>Powerful platforms, tight spreads, fast execution, and dedicated support.</p>

            <div className='grid grid-cols-3 gap-4 container m-auto'>
                {
                    data.map((item, i)=>{
                        return(
                            <div key={i.toString()} className='bg-dark text-center my-7 px-5 py-6 '>
                                <h6 className='text-blue font-semibold'>{item.heading}</h6>
                                <p className='text-grey py-1'>{item.title}</p>
                                <a href='#' className='text-white pt-4'>{item.btn}</a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}
