import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitile from "./AnimatedTitile";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  useGSAP(() => {
    const scrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "center center",
        end: "+=1000 center",
        scrub: 0.5,
      },
    });

    scrollAnimation.to("#about", {
      backgroundColor: "black",
    });
  });

  return (
    <div id="about" className=" w-screen bg-blue-50">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>

        <AnimatedTitile
          title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adve<b>n</b>ture"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPFG</p>
          <p className="text-gray-500">
            Zentry unites every player form countless games and platforms
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">

          <div className="mask-clip-path about-image transition">
            <img
              src="img/about.webp"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
      </div>
    </div>
  );
};

export default About;
