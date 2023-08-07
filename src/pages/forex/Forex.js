import React from 'react'
import { Hero } from '../../components/global/hero/Hero'
import { Counter } from '../../components/counter/Counter'
import { FuhnanceForex } from '../../components/forex/fuhnance-forex/FuhnanceForex';
import { TaradeWay } from '../../components/global/trade-way/TaradeWay';
import { StartingFuhnance } from "../../components/global/starting-fuhnance/StartingFuhnance";
import { GlobalMarkets } from '../../components/global/global-markets/GlobalMarkets';
import { useEffect } from 'react';

export const Forex = () => {
  const bg = "url('./images/forex.png')";
  const data = [
    {
      title: "2800",
      para: "Instrument"
    },
    {
      title: "5M+",
      para: "Registered Customers"
    },
    {
      title: "1B+",
      para: "Traded Value"
    },
    {
      title: "800+",
      para: "Positions Opened"
    },
    {
      title: "50+",
      para: "Countries"
    },
  ]

  const tradeWay = [
    {
      img: "./images/forex-icn.png",
      title: "Forex Pairs",
      para: "Trade on the strength of one currency versus another. The FX market is the largest and most liquid market in the world"
    },
    {
      img: "./images/forex-icn.png",
      title: "Indices",
      para: "Trade on the strength of one currency versus another. The FX market is the largest and most liquid market in the world"
    },
    {
      img: "./images/forex-icn.png",
      title: "Cryptocurrencies",
      para: "Speculate on the price of some of the most popular cryptocurrencies"
    },
    {
      img: "./images/forex-icn.png",
      title: "Commodities",
      para: "Speculate on the price of all the most popular commodities, including gold, silver, oil and natural gas"
    },
    {
      img: "./images/forex-icn.png",
      title: "Share & ETFs",
      para: "Take a position on the performance of the world's largest companies, from Apple to Amazon and Rio Tinto to RBS"
    },
    {
      img: "./images/forex-icn.png",
      title: "Treasuries",
      para: "Take a view on government bonds, gilts and treasury notes to get exposure to a specific region's economy"
    }

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
    document.title = "Forex"
  },[])
  return (
    <>
      <Hero
        bg={bg}
        heading={<>Risk Free Forex Trading with <span className='text-blue'>Fuhnance</span> </>}
        para="Trade with algorithms, connect with apps, and build services with our easy to use platform."
        height={true}
      />
      <Counter data={data} />
      <FuhnanceForex />
      <TaradeWay
        heading="Trade your way"
        para="See why we're the trading partner of choice for hundreds of thousands of traders worldwide."
        tradeWay={tradeWay}
      />
      <GlobalMarkets tableData={tableData} headings="Competitive spreads" desc="Our spreads start from just 1 point on the UK 100 and Germany 30, and 0.8 pips on EUR/USD and EUR/GBP." />
      <StartingFuhnance />
    </>
  )
}
