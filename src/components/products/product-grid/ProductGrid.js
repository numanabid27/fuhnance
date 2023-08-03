import React from 'react'

export const ProductGrid = () => {
    const data = [
        {
            heading : "Self-managed Investing",
            para : "Everything you need to manage your own investments"
        },
        {
            heading : "Managed Portfolios",
            para : "Automated investing and trading strategies at a low cost"
        },
        {
            heading : "Intuitive Trading Tools",
            para : "Investment platforms for different needs and experience levels"
        },
        {
            heading : "Expert Insights",
            para : "In-platform market research, learning resources and more"
        },

    ]
  return (
    <>
        <section>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-18 container m-auto md:py-20 py-16 side-padding'>
                {
                    data.map(({heading, para}, i)=>{
                        return(
                            <div className='text-center lg:pb-0 md:pb-3 pb-6' key={i.toString()}>
                                <h6 className='text-white text-[20px] font-semibold'>{heading}</h6>
                                <p className='text-white text=[14px] pt-4'>{para}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}
