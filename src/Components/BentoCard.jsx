import React from 'react';
import Button from './Button';
import { TiLocationArrow } from "react-icons/ti";


const BentoCard = ({src,title,description,cover,color}) => {
  return (
    
    <div className={`relative size-full`}>
        <video src={src}
        autoPlay
        loop
        muted
        className={`absolute left-0 top-0 size-full ${cover?"object-cover":"object-contain"} object-center`}
        ></video>
        <div className={`relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ${color&&"!text-black"}`}>
            <div>
                <h1 className='bento-title special-font'>{title}</h1>
                {description && (
                    <p className='mt-3 max-w-64 text-xs md:text-base  '>{description}</p>
                )}
            </div>
            <Button containerClass={"!bg-black text-[#dadada7a] flex gap-2 border-2 border-[#dadada7a]"} rightIcon={<TiLocationArrow />} title={"Comming Soon"}/>
        </div>
    </div>
  )
}

export default BentoCard

