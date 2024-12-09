import Tilt from "react-parallax-tilt";
import Button from "./Button";
import AnimatedTitile from "./AnimatedTitile";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Story = () => {

  useGSAP(() => {
    const scrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#story",
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    scrollAnimation.to("#story", {
      backgroundColor: "#dfdff0",
      color: "black",
      duration: 0.5,
      ease: "power2.inOut",
    });

    scrollAnimation.to("p,#realm-btn", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.5");
  });


  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <div className="text-sm font-general uppercase  md:text-[10px]  ">
          The Open IP Universe
        </div>

        <div className="relative size-full">
          <AnimatedTitile
            title={"The St<b>o</b>ry of <br /> a hidden real<b>m</b>e"}
            sectionId="#story"
            containerClass={
              "mt-5 pointer-events-none mix-blend-difference relative z-10"
            }
          />

          <div className="story-img-container">
            <Tilt
              transitionSpeed={500}
              reset={true}
              perspective={990}
              className="story-img-mask"
            >
              <Tilt className="story-img-content">
                <img
                  src="/img/entrance.webp"
                  className="object-contain"
                  alt=""
                />
              </Tilt>
            </Tilt>
            
            {/* For rounded Corners */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
