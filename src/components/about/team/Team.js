import React from 'react';
import { Heading } from "../../../components/global/heading/Heading";
import { Link } from 'react-router-dom';

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
                <div className='m-auto max-w-[650px]'>
                    <Heading heading={<><span className='text-blue'>Professional and Expert</span> Team Members</>} />
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-12 team_container'>
                    {
                        team.map(({img, name, designation}, i)=>{
                            return(
                                <div key={i.toString()} className='text-center'>
                                    <div className='relative'>
                                        <img src={img} alt='' />
                                        <div className='absolute team_social'>
                                        <Link to="#">
                                            <img src='./images/fbc.png' alt='' className='mb-1 w-full' />
                                        </Link>
                                        <Link to="#">
                                            <img src='./images/tweet.png' alt='' className='mb-1 w-full' />
                                        </Link>
                                       
                                    </div>
                                    </div>
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
