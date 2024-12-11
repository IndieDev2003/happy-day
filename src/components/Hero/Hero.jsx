import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-h2", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
    tl.from(".hero-p", {
      x: 100,
      opacity: 0,
      duration: 1,
    });
    tl.from(".hero-btn", {
      y: -20,
      opacity: 0,
      duration: 1,
    });
  }, {});

  return (
    <div className="hero px-2 sm:px-10 min-h-screen w-screem flex items-center justify-center text-black dark:text-white dark:bg-black bg-white">
      <div>
        <h2 className="hero-h2 text-6xl">So We Are Here Again</h2>
        <p className="hero-p sm:max-w-[50vw] text-lg my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          aliquid labore molestiae! Dolores facilis nostrum quod sunt magnam,
          optio rem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit, consequatur?
        </p>
        <button className="hero-btn">Got It</button>
      </div>
    </div>
  );
}

export default Hero;
