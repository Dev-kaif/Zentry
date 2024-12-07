import React, { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loaddedVideos, setloaddedVideos] = useState(0);

  const totalVideo = 3;
  const nextVideoRef = useRef(null);

  const upCommingVideoindex = (currentIndex % totalVideo) + 1;
  const handleMiniVideoClick = () => {
    sethasClicked(true);
    setcurrentIndex(upCommingVideoindex);
  };

  const handleVieoLoad = () => {
    setloaddedVideos((prev) => prev + 1);
  };

  const getVideoSrc = (index) => `../../public/videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSrc(upCommingVideoindex)}
                ref={nextVideoRef}
                loop
                muted
                autoPlay
                id="current-video"
                className="size-64 object-cover object-center origin-center scale-150 "
                onLoadedData={handleVieoLoad}
              />
            </div>
          </div>
          <video
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
          />
          <video
          src={getVideoSrc(currentIndex=== totalVideo-1? 1:currentIndex)}
          loop 
          muted 
          autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center" 
        onLoadedData={handleVieoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
            G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-blue-100">Redefi<b>n</b>e</h1>

                <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                    Enter the Metagame Layer <br /> Unleash the Play Economy
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
