import React from "react";
import { roboto } from "../lib/font";
import MainButton from "./ui/MainButton";
import Image from "next/image";
import { BiRightArrowCircle, BiLeftArrowCircle } from "react-icons/bi";

function SelectSonic() {
  return (
    <section
      className="relative mt-10 mx-auto flex flex-col items-center justify-center md:gap-9 gap-12"
      data-aos="zoom-in-up"
    >
      <h2
        className={`${roboto.className} max-w-xl text-center text-5xl md:text-7xl font-extrabold`}
      >
        WHAT KIND ARE YOU BEST?
      </h2>
      <p
        className={`${roboto.className} text-center text-sm max-w-[350px] md:max-w-2xl lg:max-w-3xl`}
      >
        Sonic bots is a collection of 10,000 NFTs based off the sonics
        characters, happy to announce that 9.999 will be released soon.
      </p>
      <MainButton className="absolute md:top-32 top-20 border-white border-2">
        Comming Soon
      </MainButton>
      <div className="absolute top-0 md:left-16 lg:left-40 left-4 md:z-0 -z-40 flex items-center justify-center bg-[#D1E8F1] rounded-full w-[120px] h-[120px]">
        <Image src={"/images/card3.png"} alt="logo" width={90} height={70} />
      </div>
      <div className="absolute top-5 md:top-10 -z-10 right-2 md:right-20 lg:right-48 flex items-center justify-center bg-[#E8E4C1] rounded-full w-[120px] h-[120px]">
        <Image src={"/images/card2.png"} alt="logo" width={90} height={70} />
      </div>
      <div
        className="md:h-[500px]  flex items-center justify-center gap-10"
        data-aos="zoom-out-up"
      >
        <BiLeftArrowCircle size={60} color="#CBC9C9" />
        <Image
          src={"/images/collection.png"}
          alt="logo"
          width={500}
          height={500}
        />
        <BiRightArrowCircle size={60} color="#CBC9C9" />
      </div>
    </section>
  );
}

export default SelectSonic;
