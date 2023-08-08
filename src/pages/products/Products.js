import { useEffect } from 'react';
import { Hero } from "../../components/global/hero/Hero";
import { MarketResearch } from '../../components/products/market-research/MarketResearch';
import { ProductGrid } from '../../components/products/product-grid/ProductGrid';

import { Innovation } from '../../components/global/innovation/Innovation';
import { TradeSmarter } from '../../components/products/trade-smarter/TradeSmarter';
import { StartingFuhnance } from '../../components/global/starting-fuhnance/StartingFuhnance';
import { GlobalMarkets } from '../../components/global/global-markets/GlobalMarkets';


export const Products = () => {
  const bg = "url('./images/products.png')"
  const data = [
    {
      img: "./images/lock.png",
      title: "Account Shield",
      para: "The account value shield acts as a stop loss on your entire account value. If triggered, it will close all your open positions."
    },
    {
      img: "./images/action.png",
      title: "Stop Orders",
      para: "Protect your positions from adverse market moves with trailing stops and stop-limit orders."
    },
    {
      img: "./images/calc.png",
      title: "Cancel all Orders",
      para: "Cancel all orders, or just those within an asset class, with a few clicks."
    },
    {
      img: "./images/speedMeter.png",
      title: "Margin Breakdown",
      para: "Easily monitor the margin utilisation for each instrument."
    },
    {
      img: "./images/mob.png",
      title: "Margin Alerts",
      para: "Set custom margin alerts to receive pop-up and push-notifications."
    },
    {
      img: "./images/fast.png",
      title: "Quick Close Positions",
      para: "Close all FX and CFD positions, or just those within an asset class, in two clicks.*"
    },
  ]

  const tableData = [
    {
        id: 1,
        Instrument: 'Apple Inc',
        Sell: 0.9121,
        Buy: 0.9121,
        percentChange: 0.25,
        Spread: 1.7,
        TodayHigh: 1.9121,
        TodayLow: 0.9121,
        Margin: '5.0 %',
    },
    {
        id: 2,
        Instrument: 'Tesla Motors Inc',
        Sell: 0.9121,
        Buy: 0.9121,
        percentChange: -0.25,
        Spread: 1.5,
        TodayHigh: 1.9121,
        TodayLow: 0.9121,
        Margin: '5.0 %',
    },
    {
        id: 3,
        Instrument: 'Gold',
        Sell: 0.9121,
        Buy: 0.9121,
        percentChange: 0.25,
        Spread: 1.7,
        TodayHigh: 1.9121,
        TodayLow: 0.9121,
        Margin: '5.0 %',
    },
    {
        id: 4,
        Instrument: 'Oil',
        Sell: 0.9121,
        Buy: 0.9121,
        percentChange: -0.25,
        Spread: 1.5,
        TodayHigh: 1.9121,
        TodayLow: 0.9121,
        Margin: '5.0 %',
    },
    {
        id: 5,
        Instrument: 'Gas',
        Sell: 0.9121,
        Buy: 0.9121,
        percentChange: 0.25,
        Spread: 1.7,
        TodayHigh: 1.9121,
        TodayLow: 0.9121,
        Margin: '5.0 %',
    },
    {
        id: 6,
        Instrument: 'USD/CHF',
        Sell: 0.9121,
        Buy: 0.9121,
        percentChange: -0.25,
        Spread: 1.5,
        TodayHigh: 1.9121,
        TodayLow: 0.9121,
        Margin: '5.0 %',
    },
    {
        id: 7,
        Instrument: 'USD/EUR',
        Sell: 0.9121,
        Buy: 0.9121,
        percentChange: 0.25,
        Spread: 1.5,
        TodayHigh: 1.9121,
        TodayLow: 0.9121,
        Margin: '5.0 %',
    },
  ]

  useEffect(()=>{
    document.title = "Stocks"
  }, [])
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
      <GlobalMarkets tableData={tableData} headings="Global Markets" desc="Our spreads start from just 1 point on the UK 100 and Germany 30, and 0.8 pips on EUR/USD and EUR/GBP." />
      <Innovation data={data} heading={<>Innovative <span className='text-blue'>risk-free</span> features</>} para="Discover unique tools to manage your risk and control your positions." />
      <TradeSmarter />
      <StartingFuhnance />
    </>
  )
}
