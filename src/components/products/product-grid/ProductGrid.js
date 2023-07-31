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
            <div className='grid grid-cols-4 gap-18 container m-auto py-12'>
                {
                    data.map(({heading, para}, i)=>{
                        return(
                            <div className='text-center' key={i.toString()}>
                                <h6 className='text-white text-[20px]'>{heading}</h6>
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
