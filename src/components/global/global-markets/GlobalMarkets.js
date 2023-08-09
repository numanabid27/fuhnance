import React from 'react'
import { Heading } from '../heading/Heading';


export const GlobalMarkets = ({ tableData, headings, desc, styling, para}) => {

    return (
        <>
            <section className='md:py-20 py-16 bg-dark'>
                <div className='container m-auto side-padding'>
                    <Heading heading={headings} />
                    <p className={`${para && "m-auto max-w-[874px]" } text-white md:text-sm text-1x1 pt-2 md:pt-1 text-center`}>{desc}</p>
                    <div className='global_table'>
                        <table striped bordered hover responsive className='mt-8 m-auto'>
                            <thead className={`${styling && "bg-[#414660]"}`}>
                                <tr>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-11 md:px-7 px-5'>{styling ? "Hedges" : "Instrument"}</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-11 md:px-7 px-5'>{styling ? "Statergies" : "Sell"}</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-11 md:px-7 px-5'>{styling ? "Per Contract Fees" : "Buy"}</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-11 md:px-7 px-5'>{styling ? "Opening Commissions" : "% Change"}</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-11 md:px-7 px-5'>{styling ? "Too Close" : "Spread"}</th>
                                    {
                                        styling ?
                                            null :
                                            <>
                                                <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-11 md:px-7 px-5'>Today High</th>
                                                <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-11 md:px-7 px-5'>Today Low</th>
                                                <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-11 md:px-7 px-5'>Margin</th>
                                            </>

                                    }
                                </tr>
                            </thead>
                            <tbody className='bg-dark-color'>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td className='text-white text-[14px] py-4 lg:px-11 md:px-7 px-5'>{data.Instrument}</td>
                                        <td className='text-white text-[14px] py-4 lg:px-11 md:px-7 px-5'>{data.Sell}</td>
                                        <td className='text-white text-[14px] py-4 lg:px-11 md:px-7 px-5'>{data.Buy}</td>
                                        <td className='text-white text-[14px] py-4 lg:px-11 md:px-7 px-5 flex items-center'>
                                            {data.percentChange !== 0 && (
                                                <>
                                                   {
                                                    styling ?
                                                    null
                                                    :
                                                    <img style={{ marginRight: '12px' }}
                                                        src={data.percentChange > 0 ? '/images/up.png' : '/images/down.png'}
                                                        alt={data.percentChange > 0 ? 'up' : 'down'}
                                                        className='w-3'
                                                    />
                                                   }
                                                </>
                                            )}
                                            {data.percentChange}
                                        </td>
                                        <td className='text-white text-[14px] py-4 lg:px-11 md:px-7 px-5'>{data.Spread}</td>
                                        {
                                            styling ? 
                                            null : 
                                            <>
                                                <td className='text-white text-[14px] py-4 lg:px-11 md:px-7 px-5'>{data.TodayHigh}</td>
                                                <td className='text-white text-[14px] py-4 lg:px-11 md:px-7 px-5'>{data.TodayLow}</td>
                                                <td className='text-white text-[14px] py-4 lg:px-11 md:px-7 px-5' >{data.Margin}</td>
                                            </>
                                        }
                                    </tr>
                                )
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

        </>
    )
}
