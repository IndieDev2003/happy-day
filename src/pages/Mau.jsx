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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea
          aliquid odio perferendis, quia quaerat sed iste dolores obcaecati
          consequatur tempore. Provident similique corrupti repellendus non
          aliquam et accusamus autem, inventore nihil hic ipsa obcaecati ea,
          sint nesciunt quisquam eveniet labore velit tempore. Sequi, optio?
          Voluptatem, molestiae? Suscipit cum odio enim explicabo deleniti. Sint
          rerum ab cupiditate obcaecati ratione. Natus voluptatum, consequatur
          asperiores in quis adipisci delectus voluptatem sed nemo, vitae
          molestiae veritatis, voluptas corrupti quisquam iure dolorem qui
          doloribus impedit numquam saepe at quae velit totam! Corporis itaque
          eveniet dolorem provident quos voluptatem natus, nostrum esse possimus
          architecto reiciendis?
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
          src="/audio/meow.mp3"
          className="hidden"
          loop
          muted
        ></audio>
      </div>
      <div className="h-screen bg-black w-screen absolute -z-20"></div>
      <img
        src="https://i.pinimg.com/1200x/95/65/3b/95653b5b50ed6fdd815c4c4930570eb1.jpg"
        className="absolute -z-10 object-bottom object-cover opacity-70 h-full sm:w-full "
        alt=""
      />
    </div>
  );
}

export default Mau;
