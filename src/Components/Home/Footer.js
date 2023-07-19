import React from 'react';
import footlogo from '../../Assets/footlogo.svg';

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center py-10 gap-2">
            <img src={footlogo} alt="flogo" className="w-1/2 sm:w-[20vh]" />
            <h1 className="text-4xl font-bold font-ss text-black text-center">
                We are here
            </h1>
            <p className="text-2xl font-normal font-ss text-black text-center px-4">
                Hello, we are CropGenie. trying to make an effort to help grow the ecosystem for farmers that powers our country.
            </p>
            <p className="py-2 text-center">© 2022 CropGenie. All Rights Reserved. </p>
        </div>
    );
}

export default Footer;
