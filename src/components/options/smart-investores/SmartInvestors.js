import React from 'react';
import {Heading} from "../../../components/global/heading/Heading";

export const SmartInvestors = () => {
  return (
    <>
        <section className='bg-dark py-20'>
            <div className='container m-auto'>
                <Heading heading = "Smart investors, made smarter with every trade" />
                <p className='text-white text-sm text-center'>Innovative payment network new kind of money simple and secure access.</p>

                <div className='grid grid-cols-2 gap-14 mt-12 items-center'>
                    <div>
                        <h2 className='text-xs text-white font-semibold'>Make Smarter Trades with Rolling Options, IV and Greeks</h2>
                        <ul className='stock_list mb-7'>
                            <li className='text-grey list-disc'>Use the Rolling Options feature to collect more premium or extend a trade's duration, potentially giving your stock the opportunity to further move in your favor. Rolling options are also used to collect additional premium to help lower the cost basis of a stock.</li>
                            <li className='text-grey list-disc'>View your potential maximum gain or loss before you place an order with the Risk/Reward Profile.</li>
                            <li className='text-grey list-disc'>Option Greeks measures the various factors that impact the price sensitivity of an options contract.</li>
                            <li className='text-grey list-disc'>Measure the different factors affecting options prices right from the options chain using Implied Volatility (IV).</li>
                        </ul>
                        <a href="#" className="text-white bg-blue inline-flex items-center text-sm px-7 py-2 h- rounded-sm">Start Trading <img src="./images/right-arrow.png" alt=""  className="w-[10px] ml-2" /></a>
                    </div>
                    <div>
                        <img src='./images/stock.png' alt='' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
