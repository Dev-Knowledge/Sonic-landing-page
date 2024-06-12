import React from "react";
import { archivo, roboto } from "../lib/font";
import { GiCondorEmblem } from "react-icons/gi";
import { GiConcentrationOrb } from "react-icons/gi";
import { SiIcons8 } from "react-icons/si";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { FaFonticonsFi } from "react-icons/fa";
import SonicCard from "./ui/SonicCard";
import MainButton from "./ui/MainButton";
import { MotionDiv, MotionP } from "../lib/utils";

function WhatisSonic() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-10 py-5 "
      data-aos="fade-up"
    >
      <article className="w-full flex flex-col items-start justify-center rounded-t-2xl px-8 py-8 bg-[#3B3F3E]">
        <div>
          <MotionP
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className={`${archivo.className} text-white lg:text-[52px] text-[40px] font-extrabold`}
          >
            WHAT IS SONIC?
          </MotionP>
          <MotionP
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className={`${roboto.className} text-white lg:text-lg text-sm text-justify max-w-[300px] lg:max-w-[400px] pb-4`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officiis perferendis labore cupiditate aspernatur, dolores quidem
            asperiores! Incidunt porro voluptates repellendus.
          </MotionP>
        </div>
      </article>
      <MotionDiv
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="w-full flex items-start justify-center gap-3 md:gap-12 rounded-b-2xl px-5 py-6 lg:py-12 bg-[#F1575D]"
      >
        <FaFonticonsFi size={45} color="white" />
        <GiCondorEmblem size={45} color="white" />
        <SiIcons8 size={45} color="white" />
        <GiConcentrationOrb size={45} color="white" />
        <PiContactlessPaymentFill size={45} color="white" />
        <PiContactlessPaymentFill size={45} color="white" />
        <PiContactlessPaymentFill size={45} color="white" />
        <PiContactlessPaymentFill size={45} color="white" />
        <PiContactlessPaymentFill size={45} color="white" />
        <PiContactlessPaymentFill size={45} color="white" />
      </MotionDiv>
      <SonicCard />
      <div className="absolute left-16 lg:top-[264px] md:top-[235px] top-[296px]">
        <MainButton className="border-2 text--[#B0B0B0] bg-[#383838] border-[#B0B0B0]">
          See all details
        </MainButton>
      </div>
    </section>
  );
}

export default WhatisSonic;
