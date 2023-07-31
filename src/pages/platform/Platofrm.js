import React from 'react'
import { Banner } from '../../components/platform/banner/Banner'
import { ChooseFuhnance } from "../../components/global/choose-fuhnance/ChooseFuhnance";
import { BiggestMoment } from "../../components/home/biggest-moments/BiggestMoment";
import { FuhnanceProducts } from "../../components/home/fuhnance-products/FuhnanceProducts";
import { OutsourcingBenificts } from "../../components/home/outsource-benificts/OutsourcingBenificts";
import { StartingFuhnance } from "../../components/global/starting-fuhnance/StartingFuhnance";

export const Platofrm = () => {
  return (
    <>
      <Banner />
      <ChooseFuhnance />
      <BiggestMoment />
      <FuhnanceProducts />
      <OutsourcingBenificts />
      <StartingFuhnance />
    </>
  )
}
