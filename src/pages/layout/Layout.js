import React from 'react'
import { Footer } from '../../components/global/footer/Footer'

export const Layout = (props) => {
  return (
    <>
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}
