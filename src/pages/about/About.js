import React, { useEffect } from 'react';
import { Hero } from "../../components/global/hero/Hero";
import { Counter } from '../../components/counter/Counter';
import { Innovation } from '../../components/global/innovation/Innovation';
import { FuhnancePower } from '../../components/about/fuhnance-power/FuhnancePower';
import { FuhnanceManifesto } from '../../components/about/fuhnance-manifesto/FuhnanceManifesto';
import { Team } from '../../components/about/team/Team';
import { StartingFuhnance } from "../../components/global/starting-fuhnance/StartingFuhnance";

export const About = () => {

    useEffect(()=>{
      document.title = "About"
    },[])
    const bg = "url('./images/about.png')";
    const data = [
        {
          title: "+280B+",
          para: "Quarterly Volume Trade"
        },
        {
          title: "$5M+",
          para: "Stocks"
        },
        {
          title: "$1B+",
          para: "Assets on platform"
        },
        {
          title: "$80M+",
          para: "Forex Trade"
        },
        {
          title: "50+",
          para: "Countries"
        },
    ]

    
    const data2 = [
        {
            img: "./images/coins.png",
            title: "Forex Trading",
            para: "Stay on top of the market with our innovative technology, extensive product access, personalized trading, and Forex trading."
        },
        {
            img: "./images/tv.png",
            title: "Stocks Trading",
            para: "Stay on top of the market with our innovative technology, extensive product access, personalized trading, and Stocks trading."
        },
        {
            img: "./images/tv-graph.png",
            title: "Options Trading",
            para: "Stay on top of the market with our innovative technology, extensive product access, personalized trading, and Option trading."
        }
    ]

  return (
    <>
        <Hero 
            bg={bg}
            heading={<>About <span className='text-blue'>Fuhnance</span></>}
            para="Fuhnance has a variety of features that make it the best place to start trading" 
            height={false}
        />
        <Counter data={data}/>
        <Innovation
            data={data2}
            heading="Our Features"
            styles={true}
        />
        <FuhnancePower />
        <FuhnanceManifesto />
        <Team />
        <StartingFuhnance />
    </>
  )
}
