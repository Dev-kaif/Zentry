import React from 'react';

const BentoCard = ({src,title,description,cover,color}) => {
  return (
    
    <div className={`relative size-full ${color && "bg-violet-300"}`}>
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
                    <p className='mt-3 max-w-64 text-xs md:text-base '>{description}</p>
                )}
            </div>
            {color && ("")}
        </div>
    </div>
  )
}

export default BentoCard

