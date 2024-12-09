import React from "react";
import BentoCard from "./BentoCard";
import Tilt from "react-parallax-tilt";
import { TiLocation, TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className }) => {
  return (
    <Tilt
      tiltMaxAngleY={8}
      tiltMaxAngleX={8}
      scale={0.96}
      perspective={1000}
      reset={true}
      className={`${className} cursor-grabbing transition duration-300`}
    >
      {children}
    </Tilt>
  );
};

const Features = () => {
  return (
    <div className="bg-black pb-52 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-3 md:px-10 ">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Dive into the 'Game of Games' Universe{" "}
          </p>
          <p className="Max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding <br /> ecosystem where
            a vibrant array of products <br /> converge into an interconnected
            universe.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src={"videos/feature-1.mp4"}
            title={
              <>
                radi<b>n</b>t
              </>
            }
            cover
            description={
              "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            }
          />
        </BentoTilt>
        <div className="grid h-[170vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={"videos/feature-2.mp4"}
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              cover
              description={
                "An anime and gaming-inspired NFT collection - the IP primed for expansion."
              }
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src={"videos/feature-3.mp4"}
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              cover={false}
              description={
                "A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction"
              }
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src={"videos/feature-4.mp4"}
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              cover
              description={
                "A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              }
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <div className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re <br /> Com<b>m</b>ing <br /> so<b>o</b>n.
              </div>
              <TiLocationArrow className="m-5 scale-[5] self-end"/>
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              className=" size-full object-cover object-center"
              autoPlay
              muted
              loop
              src="videos/feature-5.mp4"
            />
          </BentoTilt>
        </div>
      </div>
    </div>
  );
};

export default Features;
