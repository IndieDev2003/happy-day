import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import text from "../../assets/text";

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
          toggleActions: "restart play play reverse",
          // markers: true,
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
        <h2 className="sec2-h2 text-4xl sm:text-5xl mb-4">{!text.sec2.heading? 'Heading Sec 2' : text.sec2.heading }</h2>
        <p className="sec2-p text-lg sm:text-xl nunito font-semibold sm:w-[50vw] ">
        {!text.sec2.para
            ? "Paragraph Sec 2   Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modierror beatae ea perferendis architecto saepe aliquid deserunt voluptasvoluptate! A quidem unde harum at repellat repellendus cum consecteturlibero, iure quo voluptatibus minus iusto repudiandae necessitatibusad voluptas ullam. Animi saepe delectus adipisci dolore officiis quaequibusdam minus quo recusandae? Ipsam ducimus at ad quis non sedpariatur!"
            : text.sec2.para}
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
