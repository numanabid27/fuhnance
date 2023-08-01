import React from 'react'
import { Heading } from '../global/heading/Heading';
import data from "../data/data.json";

export const GlobalMarkets = () => {
    console.log(data.tableBody)
    
  return (
    <>
        <section className='py-12 bg-dark'>
            <div className='container m-auto'>
                <Heading heading = "Global Markets" />
                <p className='text-white text-sm text-center'>Our spreads start from just 1 point on the UK 100 and Germany 30, and 0.8 pips on EUR/USD and EUR/GBP.</p>

                <table>
                    <thead>
                        <tr>
                            {
                                data.tableHead.map((title)=>{
                                    return(
                                        <th>{title}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                data.tableBody.map((title)=>{
                                    return(
                                       
                                        <td>{title.title}</td>
                                    )
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        
    </>
  )
}
