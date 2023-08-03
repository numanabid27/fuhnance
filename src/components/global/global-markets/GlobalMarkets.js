import React from 'react'
import { Heading } from '../heading/Heading';


export const GlobalMarkets = ({tableData, headings, desc}) => {
   

    return (

        <>
            <section className='md:py-20 py-16 bg-dark'>
                <div className='container m-auto side-padding'>
                    <Heading heading={headings} />
                    <p className='text-white md:text-sm text-1x1 pt-2 md:pt-0 text-center'>{desc}</p>
                    <div className='global_table'>
                        <table striped bordered hover responsive className='mt-8 m-auto'>
                            <thead>
                                <tr>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-9 md:px-7 px-5'>Instrument</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-9 md:px-7 px-5'>Sell</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-9 md:px-7 px-5'>Buy</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-9 md:px-7 px-5'>% Change</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-9 md:px-7 px-5'>Spread</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-9 md:px-7 px-5'>Today High</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-9 md:px-7 px-5'>Today Low</th>
                                    <th className='text-[#CFCFCF] text-[14px] font-normal py-4 lg:px-9 md:px-7 px-5'>Margin</th>
                                </tr>
                            </thead>
                            <tbody className='bg-dark-color'>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td className='text-white text-[14px] py-4 lg:px-9 md:px-7 px-5'>{data.Instrument}</td>
                                        <td className='text-white text-[14px] py-4 lg:px-9 md:px-7 px-5'>{data.Sell}</td>
                                        <td className='text-white text-[14px] py-4 lg:px-9 md:px-7 px-5'>{data.Buy}</td>
                                        <td className='text-white text-[14px] py-4 lg:px-9 md:px-7 px-5 flex items-center'>
                                            {data.percentChange !== 0 && (
                                                <>
                                                    <img style={{ marginRight: '12px' }}
                                                        src={data.percentChange > 0 ? '/images/up.png' : '/images/down.png'}
                                                        alt={data.percentChange > 0 ? 'up' : 'down'}
                                                        className='w-3'
                                                    />
                                                </>
                                            )}
                                            {data.percentChange}
                                        </td>
                                        <td className='text-white text-[14px] py-4 lg:px-9 md:px-7 px-5'>{data.Spread}</td>
                                        <td className='text-white text-[14px] py-4 lg:px-9 md:px-7 px-5'>{data.TodayHigh}</td>
                                        <td className='text-white text-[14px] py-4 lg:px-9 md:px-7 px-5'>{data.TodayLow}</td>
                                        <td className='text-white text-[14px] py-4 lg:px-9 md:px-7 px-5' >{data.Margin}</td>
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
