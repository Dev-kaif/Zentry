import  { useState,useEffect,useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useMotionValueEvent, useScroll } from "framer-motion";
import gsap from "gsap";


export const Navbar = () => {

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const navItems = ["Nexus", "Vault", "Prolouge", "About", "Contact"];
  const navContainerRef = useRef(null);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);

    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  const [lastScroll, setLastScroll] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (current) => {
    setLastScroll((prev) => {
      if (prev <=100) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.remove("floating-nav");
      } else if (current > prev) {
        setIsNavVisible(false);
        navContainerRef.current?.classList.add("floating-nav");
      } else {
        setIsNavVisible(true);
        navContainerRef.current?.classList.add("floating-nav");
      }
      return current; 
    });
  });

  useEffect(() => {
    if (!navContainerRef.current) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      ease: "easeOut",
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex gap-7 items-center">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass={
                "bg-blue-50 md:flex hidden item-center justify-center gap-1 "
              }
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className="nav-hover-btn"
                  href={`#${item.toLowerCase()}`}
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </div>
            <button
              onClick={toggleAudio}
              className="ml-10 flex items-center space-x-0.5 "
            >
              <audio
                ref={audioRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />

              {[1, 2, 3, 4].map((bar, i) => (
                <div
                  key={i}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.2}s` }}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};
