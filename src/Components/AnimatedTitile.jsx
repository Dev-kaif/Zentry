import { useRef , useEffect} from "react";
import clsx from "clsx"; // Utility for conditional class names
import gsap from "gsap"; 
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger); 

const AnimatedTitile = ({ title, containerClass }) => {
  const containerRef = useRef(null); // Reference to the container DOM element

//   gsap.context is used to scope GSAP animations to a specific part of the DOM. This feature is especially useful in React because it ensures that animations are applied only to the elements within the current component and cleaned up properly when the component is unmounted.
  useEffect(() => {
    // GSAP context to manage animations for this component
    const context = gsap.context(() => {

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // Element that triggers the animation
          start: "bottom 100%", // Start animation when the bottom of the element is at 100% of the viewport
          end: "center bottom", // End animation when the element's center reaches the bottom of the viewport
          toggleActions: "play none none reverse", // Animation actions on enter, leave, and re-enter
        },
      });

      // Animation for individual words
      titleAnimation.to(".animated-word", {
        opacity: 1, 
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)", // Reset 3D transformations
        stagger: 0.02, 
        ease: "power2.inOut", 
      });
    }, containerRef);

    // Cleanup animation on component unmount
    return () => context.revert();
  }, []); // Runs only once after the component is mounted

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {/* Splitting the title into lines and words */}
      {title.split("<br />").map((line, index) => (
        <div
          key={index} 
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            // Span for each word to apply animations
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }} // Directly insert word as HTML
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitile;
