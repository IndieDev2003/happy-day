import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import React, { useRef } from "react";
import { ReactTyped } from "react-typed";

gsap.registerPlugin(TextPlugin);

function Sec1() {
  const typedRef = useRef(null);


  

  useGSAP(() => {

   

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec1",
        start: "top 60%",
        end: "bottom 80%",
        toggleActions: "restart play play reverse",
        
        scrub: true,
      },
    });
    

    tl.from(".sec1 .sec1-h2", {
      x: -1000,
      opacity: 0,
      duration: 2.3,
    });
    tl.from(".sec1-p", {
      x: -100,
      opacity: 0,
      duration: 2.3,
    });
  });

  return (
    <div className="relative sec1 h-screen min-w-screen flex flex-col items-start justify-center  text-white overflow-hidden">
      <div className="px-4 sm:px-8 h-fit py-2 m-1 max-w-fit backdrop-blur-xl rounded-xl sm:ml-3 rounded-br-xl backdrop-opacity0">
        <h2 className="sec1-h2 text-4xl sm:text-4xl mb-4">Once Agian</h2>
        <p className="sec1-p text-lg sm:text-xl nunito font-semibold sm:w-[50vw]">
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi
          error beatae ea perferendis architecto saepe aliquid deserunt voluptas
          voluptate! A quidem unde harum at repellat repellendus cum consectetur
          libero, iure quo voluptatibus minus iusto repudiandae necessitatibus
          ad voluptas ullam. Animi saepe delectus adipisci dolore officiis quae
          quibusdam minus quo recusandae? Ipsam ducimus at ad minus quis non sed
          pariatur!
        </p>
      </div>
      <img
        src="https://i.pinimg.com/1200x/ec/85/bf/ec85bfc28d22185e02907da7ecc275ad.jpg"
        className="absolute -z-10 h-full sm:w-full object-cover"
        alt=""
      />
    </div>
  );
}

export default Sec1;
