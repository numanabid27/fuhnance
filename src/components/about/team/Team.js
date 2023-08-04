import React from 'react';
import { Heading } from "../../../components/global/heading/Heading";

export const Team = () => {
    const team = [
        {
            img:"./images/team1.png",
            name:"Lucas Ethan",
            designation : "Forex Expert"
        },
        {
            img:"./images/girls.png",
            name:"Jack Alexander",
            designation : "Stock Expert "
        },
        {
            img:"./images/onee.png",
            name:"William James",
            designation : "Option Expert"
        },
    ]
  return (
    <>
        <section className='bg-dark-color md:py-20 py-16'>
            <div className='container m-auto side-padding'>
                <Heading heading={<><span className='text-blue'>Professional and Expert</span> Team Members</>} />

                <div className='grid md:grid-cols-3 grid-cols-1 gap-12 team_container'>
                    {
                        team.map(({img, name, designation}, i)=>{
                            return(
                                <div key={i.toString()} className='text-center'>
                                    <img src={img} alt='' />
                                    <h6 className='text-white text-[20px] font-bold mt-3'>{name}</h6>
                                    <p className='text-[#9C9C9C]'>{designation}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}
