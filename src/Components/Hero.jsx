import  { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // State to keep track of the current video index
  const [currentIndex, setcurrentIndex] = useState(1);

  // Total number of videos available
  const totalVideo = 4;

  // Reference for the next video element
  const nextVideoRef = useRef(null);

  // Function to generate the video source path based on the index
  const getVideoSrc = (index) => `../../public/videos/hero-${index}.mp4`;

  // Calculate the index of the next video in sequence
  const upCommingVideoindex = (currentIndex % totalVideo) + 1;

  // State to track whether the mini video has been clicked
  const [hasClicked, sethasClicked] = useState(false);

  // Function to handle mini video click and update the video index
  const handleMiniVideoClick = () => {
    sethasClicked(true); // Mark as clicked
    setcurrentIndex(upCommingVideoindex); // Update to the next video index
  };

  // State to manage loading screen visibility
  const [isLoading, setIsLoading] = useState(true);

  // State to count the number of videos loaded
  const [loaddedVideos, setloaddedVideos] = useState(0);

  // Function to increment the loaded video count when a video is loaded
  const handleVieoLoad = () => {
    setloaddedVideos((prev) => prev + 1);
  };

  // Effect to remove the loading screen once all videos are loaded
  // useEffect(() => {
  //   if (loaddedVideos === 1) {
  //     setIsLoading(false); // Hide the loading screen
  //   }
  // }, [loaddedVideos]); // Dependency: triggers when 'loaddedVideos' changes

  // GSAP animation triggered when the video index changes
  useGSAP(
    () => {
      if (hasClicked) {
        // Make the next video visible and animate it
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
          onStart: () => nextVideoRef.current.play(), // Play the next video on animation start
        });

        // Animate the current video to shrink
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true } // Trigger whenever 'currentIndex' changes
  );

  // GSAP animation for the video frame's clip-path and border radius
  useGSAP(() => {
    // Initial clip-path and border radius setup
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    // Animation when scrolling
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: "true", // Smooth animation on scroll
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* Loading Screen */}
      {/* {isLoading && (
        <div className="flex justify-center items-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-500">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )} */}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
            <div
              onClick={handleMiniVideoClick} // Handle click on mini video
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              {/* Mini video preview */}
              <video
                src={getVideoSrc(upCommingVideoindex)} // Source of the upcoming video
                ref={nextVideoRef}
                loop
                muted
                autoPlay
                id="current-video"
                className="size-64 object-cover object-center origin-center scale-150 "
                onLoadedData={handleVieoLoad} // Increment loaded videos count
              />
            </div>
          </div>
          {/* Main video elements */}
          <video
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)} // Source of the current video
          />
          <video
            src={getVideoSrc(currentIndex)}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVieoLoad} // Increment loaded videos count
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
            {/* Custom button with icon */}
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              containerClass="!bg-yellow-300 flex-center gap-1"
              leftIcon={<TiLocationArrow />}
            />
          </div>
        </div>
        <div className="special-font hero-heading">
          <h1 className="z-40 text-blue-75 absolute bottom-5 right-10">
            G<b>a</b>ming
          </h1>
        </div>
      </div>
      {/* Additional layered text for design */}
      <div className="absolute left-0 top-0 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-black">
            Redefi<b>n</b>e
          </h1>
          <p className="mb-5 max-w-64 font-robert-regular text-black">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <Button
            id="watch-trailer"
            title="Watch Trailer"
            containerClass="!bg-yellow-300 flex-center gap-1"
            leftIcon={<TiLocationArrow />}
          />
        </div>
      </div>
      <div className="special-font hero-heading">
          <h1 className=" text-black absolute bottom-5 right-10">
            G<b>a</b>ming
          </h1>
        </div>
    </div>
  );
};

export default Hero;
