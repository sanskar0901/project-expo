import React from 'react'
import footlogo from '../../Assets/footlogo.svg'
function Footer() {
    return (
        <div className='flex flex-col justify-center items-center py-20 gap-2'>
            <img src={footlogo} alt="flogo" className='w-[20vh]' />
            <h1 className='text-4xl font-bold font-ss text-black justify-start'>
                We are here
            </h1>
            <p className='text-2xl font-[400] font-ss text-black justify-start'>
                Hello, we are CropGenie. trying to make an effort to help grow eco system for farmers that powers our country.
            </p>
            <p className='py-2'>© 2022 CropGenie. All Rights Reserved. </p>
        </div>
    )
}

export default Footer