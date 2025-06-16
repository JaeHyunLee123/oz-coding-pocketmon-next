"use client";

import Image from "next/image";
import { useState } from "react";

export default function FlipingImage({ frontImage, backImage }) {
  const [isFront, setIsFront] = useState(true);

  return (
    <>
      <div className="relative">
        <Image
          src={frontImage}
          width={150}
          height={150}
          alt="pocketmon-front"
          className={`absolute transform-3d backface-hidden transition-transform  ${
            isFront ? "rotate-y-0" : "rotate-y-180"
          }`}
        />

        <Image
          src={backImage}
          alt="pocketmon-front"
          width={150}
          height={150}
          className={`transform-3d backface-hidden transition-transform ${
            isFront ? "rotate-y-180" : "rotate-y-0"
          }`}
        />
      </div>

      <button
        onClick={() => {
          setIsFront(!isFront);
        }}
        className="hover:cursor-pointer"
      >
        뒤집기
      </button>
    </>
  );
}
