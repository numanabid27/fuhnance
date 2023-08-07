import React, { useEffect } from 'react';
import { Hero } from "../../components/global/hero/Hero";
import { Pricing } from '../../components/company/pricing/Pricing';
import { StartingFuhnance } from "../../components/global/starting-fuhnance/StartingFuhnance"

export const Company = () => {
    const bg = "url('./images/company.png')";
    useEffect(()=>{
      document.title = "Price"
    },[])
  return (
    <>
        <Hero 
            bg={bg}
            heading="Pricing"
            para="Trade with algorithms, connect with apps, and build services with our easy to use platform." 
            height={false}
        />
        <Pricing />
        <StartingFuhnance />
    </>
  )
}
