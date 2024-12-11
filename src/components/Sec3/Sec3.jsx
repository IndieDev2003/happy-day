import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useNavigate } from "react-router";

gsap.registerPlugin(ScrollTrigger, useGSAP);
function Sec3() {
  const sec3Ref = React.useRef(null);
  const navigate = useNavigate()

  useGSAP(
    () => {
      const sec = document.querySelector(".sec3");

      console.log(sec);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec3Ref.current,
          start: "center 60%",
          end: "bottom end",
          scrubbing: true,
          //   markers: true,
        },
      });

      tl.from(".sec3-h2", {
        scale: 1000,
        duration: 1.5,
        ease: "slow",
      });
      tl.to(".sec3-h2", {
        className: "sec3-h2 text-3xl sm:text-4xl text-shadow",
      });

      tl.from(".sec3-p", {
        y: -10,
        opacity: 0,
        duration: 0.5,
        delay: 2,
      });

      tl.from(".sec3 .sec3-btn", {
        y: -10,
        opacity: 0,
        duration: 0.5,
        delay: 1.5,
        //   ease: 'elastic'
      });
    },
    {
      scope: sec3Ref.current,
    }
  );
  return (
    <div
      ref={sec3Ref}
      className="sec3 min-h-screen w-screen flex items-center justify-center text-center relative"
    >
      <div className=" px-8 py-10 backdrop-blur-xl rounded-2xl mx-2">
        <h2 className="sec3-h2 text-3xl sm:text-4xl">Your Are My Mau Mau</h2>
        <p className="sec3-p text-2xl">Don't be Sad</p>
        <button onClick={()=>navigate('/mau')} className="sec3-btn px-10  py-2 text-lg rounded-2xl shadow-xl bg-gray-200 drop-shadow-lg mt-3">
          Done
        </button>
      </div>
      <img
        src="https://i.pinimg.com/1200x/ee/f6/9a/eef69ae49152d1791a3d488736e954e6.jpg"
        className="object-center object-cover -z-10 w-full absolute h-full"
        alt=""
      />
    </div>
  );
}

export default Sec3;
