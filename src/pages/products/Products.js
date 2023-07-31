import React from 'react';
import { Hero } from "../../components/global/hero/Hero";
import { MarketResearch } from '../../components/products/market-research/MarketResearch';
import { ProductGrid } from '../../components/products/product-grid/ProductGrid';
import { GlobalMarkets } from '../../components/global-markets/GlobalMarkets';
import { Innovation } from '../../components/products/innovation/Innovation';
import { TradeSmarter } from '../../components/products/trade-smarter/TradeSmarter';
import { StartingFuhnance } from '../../components/global/starting-fuhnance/StartingFuhnance';


export const Products = () => {
  const bg = "url('./images/products.png')"

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
      <Innovation />
      <TradeSmarter />
      <StartingFuhnance />
    </>
  )
}
