import React from 'react';
import { Hero } from "../../components/global/hero/Hero";
import { OptionsPlay } from '../../components/options/options-play/OptionsPlay';
import { SmartInvestors } from '../../components/options/smart-investores/SmartInvestors';
import { FantasticReturn } from '../../components/options/fantastic-return/FantasticReturn';
import { TaradeWay } from '../../components/global/trade-way/TaradeWay';
import { Innovation } from '../../components/global/innovation/Innovation';
import { StartingFuhnance } from "../../components/global/starting-fuhnance/StartingFuhnance";
import { GlobalMarkets } from '../../components/global/global-markets/GlobalMarkets';

export const Options = () => {
    const bg = "url('./images/options.png')";
    const tradeWay = [
        {
            img: "./images/move.png",
            title: "Conder",
            para: "Prpose of a condor strategy is to reduce risk, but that comes with reduced profit potential and the costs associated with trading several options legs."
        },
        {
            img: "./images/move.png",
            title: "Collar",
            para: "This  limits both gains and losses. A collar position is created by holding an underlying stock, buying an out of the money put option, and selling an out of the money call option."
        },
        {
            img: "./images/move.png",
            title: "Iron Butterfly",
            para: "The Iron Butterfly Option strategy, also called Ironfly , is a combination of four different kinds of option contracts, which together make one bull Call spread and bear Put spread"
        },
        {
            img: "./images/move.png",
            title: "Covered Stock ",
            para: "The Covered stock  offers limited return for limited risk. A covered call involves selling a call option on a stock that you already own."
        },
        {
            img: "./images/move.png",
            title: "Calender",
            para: "The simultaneously entering a long and short position on the same underlying asset but with different delivery dates"
        },
        {
            img: "./images/move.png",
            title: "Straddle",
            para: "The simultaneously buying both a put option and a call option for the underlying security with the same strike price and the same expiration date."
        }

    ]

    const data = [
        {
            img: "./images/coins.png",
            title: "Hedging",
            para: "Options trading is a useful tool for hedging against market fluctuations. By buying put options, for example, you can protect your portfolio against a downturn in the market."
        },
        {
            img: "./images/coins.png",
            title: "Versatility",
            para: "Options trading used in a range of trading strategies, including directional trading, spread trading, and volatility trading."
        },
        {
            img: "./images/coins.png",
            title: "Leverage",
            para: "Options trading also provides traders with leverage, which means you can control a large amount of assets with a relatively small investment."
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
        }
    ]
    return (
        <>
            <Hero
                bg={bg}
                heading={<>Option Trade with <span className='text-blue'>Confidence</span> </>}
                para="Trade with algorithms, connect with apps, and build services with our easy to use platform."
                height={true}
            />
            <OptionsPlay />
            <SmartInvestors />
            <FantasticReturn />
            <GlobalMarkets tableData={tableData} heading={<></>} />
            <TaradeWay
                heading={<>Option <span className='text-blue'>Trading Strategies</span></>}
                para="Option Trading strategies to choose from on Webull, including single option, covered stock, straddle, butterfly, iron condor, etc"
                tradeWay={tradeWay}
                styling={false}
            />
            <Innovation
                data={data}
                heading={<>The most <span className='text-blue'>Trusted Option Trading</span> platform</>}
                para="Here are a few reasons why you should choose Fuhnnance for Option Trading"
                styles={true}
            />
            <StartingFuhnance />
        </>
    )
}
