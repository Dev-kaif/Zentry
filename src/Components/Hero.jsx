import React, { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  useEffect(() => {
    // if loaddedvideos all videos are loadded remove the loading screen
    if (loaddedVideos === totalVideo - 1) {
      setIsLoading(false);
    }
  }, [loaddedVideos]); //use effect is trigerred if loadedvideos change

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", {
          visibility: "visible",
        });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );
  //whenevr the current index changes the animation triggers

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* Loading Screen */}
      {isLoading && (
        <div className="flex justify-center items-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-500">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

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
          {/* keep the video invisible we make it visible with gsap for animation effect */}
          <video
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
          />
          <video
            src={getVideoSrc(currentIndex)}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
            //
            onLoadedData={handleVieoLoad}
          />
        </div>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            {/* adding "!" infont of class makes it importangt and gives more priority */}
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              containerClass="!bg-yellow-300 flex-center gap-1"
              leftIcon={<TiLocationArrow />}
            />
          </div>
        </div>
        <div className="special-font hero-heading">
          <h1 className="z-40 text-blue-75  absolute bottom-5 right-5">
            G<b>a</b>ming
          </h1>
          {/* copy of same text at some posotion but at diffrent z-index */}
          <h1 className=" text-black absolute bottom-5 right-5">
            G<b>a</b>ming
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
