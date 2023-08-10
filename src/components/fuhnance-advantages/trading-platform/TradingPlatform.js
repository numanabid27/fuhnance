import React, { useEffect } from 'react';

export const TradingPlatform = () => {
    const data = [
        {
            title: "Exchange",
            desc: "Fuhnanace  offers order books with top tier liquidity, allowing users to easily trade in forex, stock , options and exchange Bitcoin, Ethereum, EOS, Litecoin, Ripple, NEO and many other digital assets with minimal slippage",
            desc2: "Fuhnanace also boasts a suite of order types to help traders take advantage of every situation",
            img: "./images/Vector2.png"
        },
        {
            title: "Margin Trading",
            desc: "Fuhnanace  offers order books with top tier liquidity, allowing users to easily trade in forex, sallows users to trade with up to 10x leverage by receiving funding from the peer to peer margin funding platform ",
            desc2: "Users can enter an order to borrow the desired amount of funding at the rate and duration of their choice, or they can simply open a position and Fuhnance will take out funding for them at the best available rate at that time",
            img: "./images/Vectors.png"
        },
        {
            title: "Derivatives",
            desc: "Users wishing to mitigate the risks associated with the volatility of Digital Tokens may trade Derivative Products on the Derivatives Site. Perpetual contracts are already available and further Derivative Products are under development",
            desc2: "Derivative Products can be traded using a Derivative Wallet credited with USDt0, a Digital Token which can be obtained by converting USD, as explained in more details on our Knowledge Base",
            img: "./images/Vectorr.png"
        },
    ]
  
    return (
        <>
            <section className='dark-color md:py-20 py-16 hello-sec'>
                <div className='container m-auto side-padding'>
                    <h2 className='text-white md:text-xs text-md font-medium'>World class <span className='text-blue'>Trading</span> platform</h2>

                    {
                        data.map((items, i) => {
                            return (
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-12 items-center trade mt-4 md:mt-0 mb-8" key={i.toString()} >
                                    <div>
                                        <h6 className='text-white text-[20px] mb-2 md:mb-0 pb-4'>{items.title}</h6>
                                        <p className='text-white font-extralight'>{items.desc}</p>
                                        <p className='text-white font-extralight'>{items.desc2}</p>
                                    </div>
                                    <div>
                                        <img src={items.img} alt='' className='w-[49%] m-auto' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}
