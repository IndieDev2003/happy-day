import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Hero() {


    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".hero-h2", {
            y: 100,
            opacity: 0,
            duration:1
        })
     }, {
        
    })

  return (
    <div className="min-h-screen w-screem flex items-center justify-center text-black dark:text-white dark:bg-black bg-white">
      <div>
        <h2 className="hero-h2 text-6xl">So We Are Here</h2>
        <p className="hero-p max-w-[50vw] text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          aliquid labore molestiae! Dolores facilis nostrum quod sunt magnam,
          optio rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur?
        </p>
      </div>
    </div>
  );
}

export default Hero;
