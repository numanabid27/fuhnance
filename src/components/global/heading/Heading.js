import React from 'react'

export const Heading = (props) => {
  return (
    <>
        <h2 className='text-white text-center lg:text-lg md:text-xs text-md font-semibold capitalize'>{props.heading}</h2>
    </>
  )
}
