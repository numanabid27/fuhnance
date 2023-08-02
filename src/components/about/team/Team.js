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
            img:"./images/team1.png",
            name:"Jack Alexander",
            designation : "Stock Expert "
        },
        {
            img:"./images/team1.png",
            name:"William James",
            designation : "Option Expert"
        },
    ]
  return (
    <>
        <section className='bg-dark-color py-20'>
            <div className='container m-auto'>
                <Heading heading={<><span className='text-blue'>Professional and Expert</span> Team Members</>} />

                <div className='grid grid-cols-3 gap-12 team_container'>
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