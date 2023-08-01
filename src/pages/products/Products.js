import React from 'react';
import { Hero } from "../../components/global/hero/Hero";
import { MarketResearch } from '../../components/products/market-research/MarketResearch';
import { ProductGrid } from '../../components/products/product-grid/ProductGrid';
import { GlobalMarkets } from '../../components/global-markets/GlobalMarkets';
import { Innovation } from '../../components/global/innovation/Innovation';
import { TradeSmarter } from '../../components/products/trade-smarter/TradeSmarter';
import { StartingFuhnance } from '../../components/global/starting-fuhnance/StartingFuhnance';


export const Products = () => {
  const bg = "url('./images/products.png')"
  const data = [
    {
      img: "./images/lock.png",
      title: "Account Shield",
      para: "The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
    },
    {
      img: "./images/lock.png",
      title: "Stop Orders",
      para: "The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
    },
    {
      img: "./images/lock.png",
      title: "Cancel all Orders",
      para: "The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
    },
    {
      img: "./images/lock.png",
      title: "Margin Breakdown",
      para: "The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
    },
    {
      img: "./images/lock.png",
      title: "Margin Alerts",
      para: "The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
    },
    {
      img: "./images/lock.png",
      title: "Quick Close Positions",
      para: "The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
    },
  ]
  return (
    <>
      <Hero
        bg={bg}
        heading={<>Ultimate <span className='text-blue'>trading experience</span> for serious traders</>}
        para="Trade with algorithms, connect with apps, and build services with our easy to use platform."
        height={true}
      />
      <MarketResearch />
      <ProductGrid />
      {/* <GlobalMarkets /> */}
      <Innovation data={data} heading={<>Innovative <span className='text-blue'>risk-free</span> features</>} para="Discover unique tools to manage your risk and control your positions." />
      <TradeSmarter />
      <StartingFuhnance />
    </>
  )
}
