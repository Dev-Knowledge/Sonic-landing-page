import Image from "next/image";
import { LuSparkle } from "react-icons/lu";
import { FaReddit } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare, FaArrowRight } from "react-icons/fa";
import { roboto } from "../lib/font";
import { archivo } from "../lib/font";
import GridPatern from "./ui/GridPatern";
import { MotionDiv, MotionImg } from "../lib/utils";

function HeroSection() {
  return (
    <section className="relative h-[700px] flex flex-col items-center justify-between md:justify-start gap-24 py-12 px-5 bg-[#DCE2E6] rounded-tl-3xl rounded-tr-3xl">
      <MotionDiv
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="w-full flex items-center justify-center lg:gap-5 md:gap-16 px-5"
      >
        <p
          className={`${archivo.className} lg:text-8xl text-6xl font-extrabold`}
        >
          WELCOMETO
        </p>

        <p
          className={`${roboto.className} hidden md:block lg:text-xs text-[10px] text-justify lg:max-w-[300px] max-w-[200px]`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique accusantium eveniet consequatur! Quod cupiditate architecto
          sit sunt eos harum nostrum iste consequatur velit vero libero
          aspernatur, vitae officiis ipsum?
        </p>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="z-10 w-full md:flex items-center justify-center gap-5 px-5 "
      >
        <div className="shadow-2xl hidden w-[164px] h-[164px] md:flex flex-col items-start pl-4 justify-center md:gap-2 rounded-2xl bg-[#F1F5F8]/50">
          <div className="flex items-center justify-center gap-2">
            <p className=" text-md font-bold ">NFT</p>
            <FaArrowRight size={15} />
          </div>
          <ul className="text-xs md:flex flex-col items-start justify-between gap-2">
            <li className="hover:underline">
              <a href="/">ROADMAP</a>
            </li>
            <li className="hover:underline">
              <a href="/">TOKENOMICS</a>
            </li>
            <li className="hover:underline">
              <a href="/">SONICLAB</a>
            </li>
          </ul>
        </div>
        <p
          className={`${archivo.className} md:flex-1 text-center md:text-right lg:text-9xl text-8xl font-extrabold`}
        >
          SONIC
        </p>
      </MotionDiv>
      <MotionDiv
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="w-full flex items-center justify-between gap-5 px-5"
      >
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-xs text-justify font-regular md:max-w-[230px] lg:max-w-[250px] hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            similique accusantium eveniet consequatur! Quod cupiditate
            architecto sit sunt eos
          </p>
          <button className=" bg-slate-900 text-white px-5 py-2 rounded-full ">
            Get Started
          </button>
        </div>
        <div className="z-10 flex flex-col items-start justify-center gap-4">
          <div className="max-w-[150px] font-bold md:flex items-center gap-2 hidden">
            <p>Follow our social media</p>
            <LuSparkle size={30} />
          </div>
          <div className="w-full">
            <ul className="w-full flex items-center justify-between gap-3">
              <li>
                <a href="/">
                  <FaReddit size={30} />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillTwitterCircle size={30} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagramSquare size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MotionDiv>
      <MotionDiv className="lg:hidden sm:block absolute z-30 -top-30 md:left-64 w-full flex items-center justify-center">
        <MotionImg
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          src="/images/herosonic.png"
          alt="hero"
          width={300}
          height={300}
        />
      </MotionDiv>
      <MotionImg
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="lg:block hidden absolute z-30 -top-10 left-64"
        src="/images/herosonic.png"
        alt="hero"
        width={450}
        height={450}
      />
      <div className="absolute top-0 rounded-t-2xl grid2 grid grid-cols-6 grid-rows-2 w-full h-[300px] ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="absolute top-[300px] grid2 grid grid-cols-6 grid-rows-2 w-full h-[400px] ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default HeroSection;
