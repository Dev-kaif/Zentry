import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".footer-link");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          backgroundColor: "#000", // Black background
          color: "#5542ff", // Footer's background color for text
          padding: "6px 12px", // Add hover padding
          borderRadius: "4px", // Smooth rounded edges
          duration: 0.3,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          backgroundColor: "transparent", // Revert background
          color: "#000", // Revert to black text
          padding: "0", // Remove hover padding
          borderRadius: "0", // Reset rounded edges
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", null);
        link.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  return (
    <footer className="w-screen bg-[#5542ff] text-black overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Explore Section */}
          <div className="footer-section">
            <h3 className="text-sm font-bold uppercase mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link text-sm font-light block">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm font-light block">
                  Prologue
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm font-light block">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm font-light block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="footer-section">
            <h3 className="text-sm font-bold uppercase mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link text-sm font-light block">
                  Radiant
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm font-light block">
                  Nexus
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm font-light block">
                  Zigma
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm font-light block">
                  Azul
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="footer-section">
            <h3 className="text-sm font-bold uppercase mb-4">Follow Us</h3>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link flex items-center text-sm font-light"
                  >
                    {link.icon}
                    <span className="ml-2">
                      {link.href.split("//")[1].split(".")[0]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section">
            <h3 className="text-sm font-bold uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link text-sm font-light block">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <p className="text-xs font-light">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
