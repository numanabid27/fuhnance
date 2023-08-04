import React from 'react'

export const Explore = () => {
    const data = [
        {
            title: "Transparent pricing and low costs.",
            desc: "We invest in educational initiatives around the world, to advance the understanding of Bitcoin and to foster greater financial education and inclusion"
        },
        {
            title: "Secure Asset Fund for Users",
            desc: "Fuhnance  stores 10% of all trading fees in a secure asset fund to protect a share of user funds."
        },
        {
            title: "Advanced Data Encryption",
            desc: "Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information"
        },
        {
            title: "Personalized Access Control",
            desc: "Personalized access control allows you to restrict devices and addresses that can access your account, for greater ease of mind."
        },

    ]
    return (
        <>
            <section className="bg-dark md:py-20 py-16">
                <div className='grid md:grid-cols-2 grid-cols-1 gap-0 container side-padding m-auto items-center'>
                    <div>
                        <h2 className='text-white md:text-xs text-md font-medium'>Explore endless possibilities <span className='text-blue'>with Fuhnance</span></h2>
                        {
                            data.map(({ title, desc }, i) => {
                                return (
                                    <div key={i.toString()} className='flex gap-7 mt-7'>
                                        <div className='md:w-[3.5%] w-[6%]'>
                                            <img src='./images/pseudo.png' alt='' className='md:w-9 w-11' />
                                        </div>
                                        <div className='w-[82%]'>
                                            <h6 className='text-white text-[20px] font-medium'>{title}</h6>
                                            <p className='text-white font-extralight pt-2 '>{desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='mt-6 md:mt-0'>
                        <img src='./images/square.png' alt='' />
                    </div>
                </div>
            </section>
        </>
    )
}
