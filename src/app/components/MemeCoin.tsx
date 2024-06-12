import React from "react";
import GridPatern from "./ui/GridPatern";
import { archivo } from "../lib/font";
import Image from "next/image";
import MainButton from "./ui/MainButton";
import { BiRightArrowAlt } from "react-icons/bi";
import Footer from "./Footer";

function MemeCoin() {
  return (
    <section className="relative h-[720px]">
      <h2
        className={`${archivo.className} absolute top-16 text-3xl md:text-5xl lg:text-6xl text-center text-white font-extrabold`}
        data-aos="zoom-out-down"
      >
        SONIC IS A MEME COIN CRYPTOCURRENCY
      </h2>
      <Image
        data-aos="zoom-out-up"
        className="absolute top-20 lg:left-64 md:left-[190px] "
        src="/images/last.png"
        alt="logo"
        width={500}
        height={500}
      />
      <div className="absolute top-[425px] px-2 md:px-16 w-full flex items-center justify-between">
        <MainButton className="flex items-center justify-center gap-2  text-black">
          See more <BiRightArrowAlt />
        </MainButton>
        <div
          className="flex items-center justify-center gap-2"
          data-aos="fade-left"
        >
          <Image
            className="rounded-full border-2"
            src="/images/logosonic.png"
            alt="logo"
            width={40}
            height={40}
          />
          <h1 className="font-bold text-white">SONIC</h1>
        </div>
      </div>
      <div className="rounded-b-3xl overflow-hidden">
        <GridPatern />
      </div>
      <div className="rounded-t-3xl overflow-hidden">
        <GridPatern />
      </div>
      <Footer />
    </section>
  );
}

export default MemeCoin;
