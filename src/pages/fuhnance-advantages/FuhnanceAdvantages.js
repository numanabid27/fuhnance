import React from 'react';
import { Hero } from "../../components/global/hero/Hero";
import { Trusted } from '../../components/fuhnance-advantages/trusted/Trusted';
import { TaradeWay } from '../../components/global/trade-way/TaradeWay';
import { Explore } from '../../components/fuhnance-advantages/explore/Explore';
import { TradingPlatform } from '../../components/fuhnance-advantages/trading-platform/TradingPlatform';
import { Testimonial } from '../../components/testimonial/Testimonial';

export const FuhnanceAdvantages = () => {
    const bg = "url('./images/about.png')";
    const tradeWay = [
        {
            img: "./images/move.png",
            title: "Easy And Convenient",
            para: "Fuhnance Minimize the rise of online trading platforms, investors can now access global markets and trade a wide range of assets from around the world with us."
        },
        {
            img: "./images/move.png",
            title: "Good Returns",
            para: "Fuhnance allows trading can be done from anywhere, at any time, giving investors great profit  and control over their investments."
        },
        {
            img: "./images/move.png",
            title: "Potential For Profit",
            para: "Fuhnance give the potential to earn a profit. By buying low and selling high, traders can take advantage of market fluctuations and earn a return on their investments."
        },
        {
            img: "./images/move.png",
            title: "Transparency",
            para: "Fuhnance Trading is generally a transparent process, with real-time market data and analytics available to help investors make informed decisions."
        },
        {
            img: "./images/move.png",
            title: "Liquidity",
            para: "Many trading instruments are highly liquid, meaning they can be bought and sold quickly and easily without impacting market prices."
        },
        {
            img: "./images/move.png",
            title: "Diversification",
            para: "Fuhnance allows investors to diversify their portfolios and spread their risk across a range of assets. This can help reduce the impact of market volatility and potentially improve overall returns."
        }

    ]
    return (
        <>
            <Hero
                bg={bg}
                heading={<><span className='text-blue'>Fuhnance</span>Advantages</>}
                para="Fuhnance has a variety of features that make it the best place to start trading"
                height={false}
            />
            <Trusted />
            <TaradeWay
                heading="Our Advantages"
                tradeWay={tradeWay}
                styling={true}
            />
            <Explore />
            <TradingPlatform />
            <Testimonial />
        </>
    )
}
