import { useState, useEffect, useRef } from "react"; 
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti"; 
import { useMotionValueEvent, useScroll } from "framer-motion";
import gsap from "gsap";

export const Navbar = () => {
  // State to track if audio is playing
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // State to manage the visual indicator for audio
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

  // Ref to access the navigation container element
  const navContainerRef = useRef(null);

  // Ref to access the audio element
  const audioRef = useRef(null);

  // Function to toggle the audio state and indicator animation
  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev); 
    setIsIndicatorActive((prev) => !prev);
  };

  // Effect to play or pause the audio based on the `isAudioPlaying` state
  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play(); 
    } else {
      audioRef.current.pause(); 
    }
  }, [isAudioPlaying]); // Dependency on `isAudioPlaying` to run the effect when it changes

  // State to track the last scroll position
  const [lastScroll, setLastScroll] = useState(0);

  // State to track the visibility of the navigation bar
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    setLastScroll((prev) => {
      if (prev <= 100) {
        setIsNavVisible(true); 
        navContainerRef.current?.classList.remove("floating-nav");
      } else if (current > prev) {
        setIsNavVisible(false); // Hide navbar when scrolling down
        navContainerRef.current?.classList.add("floating-nav");
      } else {
        setIsNavVisible(true); // Show navbar when scrolling up
        navContainerRef.current?.classList.add("floating-nav");
      }
      return current; // Update last scroll position
    });
  });

  // Effect to animate the navbar visibility with GSAP
  useEffect(() => {
    if (!navContainerRef.current) return; // Exit if the ref is not yet assigned

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100, // Move navbar up or down
      opacity: isNavVisible ? 1 : 0, 
      ease: "easeOut",
      duration: 0.2,
    });
  }, [isNavVisible]); // Dependency on `isNavVisible` to update animation

  return (
    <div
      ref={navContainerRef} // Attach the ref to the navbar container
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Left section: logo and button */}
          <div className="flex gap-7 items-center">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass={
                "bg-blue-50 md:flex hidden item-center justify-center gap-1"
              }
            />
          </div>

          {/* Center and right section: nav items and audio toggle */}
          <div className="flex h-full items-center">
            {/* Navigation menu items */}
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className="nav-hover-btn"
                  href={`#${item.toLowerCase()}`} // Link to corresponding section
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </div>

            {/* Audio toggle button */}
            <button
              onClick={toggleAudio} // Toggle audio when button is clicked
              className="ml-10 flex items-center space-x-0.5"
            >
              {/* Hidden audio element */}
              <audio
                ref={audioRef} // Attach the ref to the audio element
                className="hidden"
                src="/audio/loop.mp3" // Audio file source
                loop // Loop the audio
              />

              {/* Visual indicator for audio */}
              {[1, 2, 3, 4].map((bar, i) => (
                <div
                  key={i}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : "" // Add active class if audio is playing
                  }`}
                  style={{ animationDelay: `${bar * 0.2}s` }} // Staggered animation delay
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};
