import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Sec2() {
  const sec2Ref = useRef(null);
  
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec2Ref.current,
          start: "top 50%",
          end: "bottom 90%",
          scrub: true,
          markers: true,
        },
      });

      tl.from(".sec2 .sec2-h2", {
        x: 1000,
        opacity: 0,
        duration: 2.3,
      });
      tl.from(".sec2 .sec2-p", {
        x: 300,
        opacity: 0,
        duration: 100,
        delay: 2,
      });
    },
    { scope: sec2Ref.current }
  );
  return (
    <div
      ref={sec2Ref}
      className="sec2 relative h-screen min-w-screen flex items-center justify-end overflow-hidden"
    >
      <div className="text-white text-end px-4 sm:px-10 h-fit m-2 sm:mr-4 py-2 max-w-fit backdrop-blur-xl rounded-xl rounded-bl-xl backdrop-opacity0">
        <h2 className="sec2-h2 text-4xl sm:text-5xl mb-4">Once Agian</h2>
        <p className="sec2-p text-lg sm:text-xl nunito font-semibold sm:w-[50vw] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ratione adipisci voluptatibus quod esse delectus odit nam. Ipsam, quis
          quod ullam vitae, earum voluptatibus facilis nostrum deleniti quos
          necessitatibus atque?
        </p>
      </div>
      <img
        src="https://i.pinimg.com/1200x/28/39/d4/2839d4e57349be9326aeb9dd158c115e.jpg"
        className="absolute h-full sm:w-full object-cover -z-10"
        alt=""
      />
    </div>
  );
}

export default Sec2;
