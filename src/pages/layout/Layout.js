import React from 'react'
import { Footer } from '../../components/global/footer/Footer'
import Header from '../../components/global/header/Header'

export const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}
