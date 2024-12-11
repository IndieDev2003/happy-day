import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import { useNavigate } from "react-router";

import text from "../../assets/text.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Hero() {
  const navigate = useNavigate();

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
        <h2 className="hero-h2 text-6xl">
          {!text.main.heading ? "Main Heading" : text.main.heading}
        </h2>
        <p className="hero-p sm:max-w-[50vw] text-lg my-2">
          {!text.main.para ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia rem facere quisquam inventore sapiente obcaecati harum repellendus quas dignissimos modi?" : text.main.para}
        </p>
        <button onClick={() => navigate("/mau")} className="hero-btn">
          For You
        </button>
        
      </div>
    </div>
  );
}

export default Hero;
