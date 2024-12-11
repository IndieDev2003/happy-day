import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

function Mau() {
  const [mauPlay, setMauPlay] = useState(false);
  const audioRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (mauPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [mauPlay]);

  return (
    <div className="outfit min-h-screen w-screen flex items-center justify-center relative ">
      <div className="text-center px-3 sm:px-10 text-white">
        <h2 className="text-4xl sm:text-5xl">Open It</h2>
        <p className="text-base sm:text-lg sm:max-w-[70vw]">
          So yeh paragraph us ladki ke liye hai jiska nam Aashik Bhardwaj hai and woh meri pyari c wifeee hai and Mai use is dunia mai kisi aur insan se jyada pyar krta hu, and karta rahunga kyuki woh meri cutie catty hai, woh itni pyari c hai ki mujhe kabhi kabhi khyal aata hai ki woh meri girlfriend kaise ho skti. Prr woh meri girlfriend and future wife hai. Aye kya sharma rahi ho mai tumhari hi bat krr raha hu meri billi. Haa mujhe pta hai ki abhi time hai kafi jyada hmari shadi Mai prr mai tumhe abhi se apni wife manta hu. Kyuki tum ho chup chap haa bol diyo jis din mai purpose karu shaddi ke liye, samjhi. Meri cutie billi tum jaisi ladki maine ajj tak nhi dekhi, agar koi aur hogi bhi to abb mujhe nhi dekhni, kyuki mujhe mere wali mill chuki hai.  I love meri catty, I Love So much meri pyari c beti ki mummy, I love you soo much ❤️❤️.
        </p>
        <div className="flex gap-3 items-center justify-center mt-4">
          <button
            onClick={() => setMauPlay(true)}
            className="px-8 py-2 bg-purple-500 text-white rounded-xl "
          >
            Say Mau
          </button>
          <button
            onClick={() => {
              setMauPlay(false), navigate("/");
            }}
            className="px-8 py-2 bg-green-500 text-white rounded-xl "
          >
            Go Back
          </button>
        </div>
        <audio
          ref={audioRef}
          src="/audio/catt.ogg"
          className="hidden"
          loop
          
        ></audio>
      </div>
      <div className="h-screen bg-black w-screen absolute -z-20"></div>
      <img
        src="https://i.pinimg.com/1200x/95/65/3b/95653b5b50ed6fdd815c4c4930570eb1.jpg"
        className="absolute -z-10 object-bottom object-cover opacity-50 h-full sm:w-full "
        alt=""
      />
    </div>
  );
}

export default Mau;
