import React from 'react'
import { Hero } from '../../components/global/hero/Hero'
import { Counter } from '../../components/counter/Counter'
import { FuhnanceForex } from '../../components/forex/fuhnance-forex/FuhnanceForex';
import { TaradeWay } from '../../components/global/trade-way/TaradeWay';
import { StartingFuhnance } from "../../components/global/starting-fuhnance/StartingFuhnance";

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
      <StartingFuhnance />
    </>
  )
}
