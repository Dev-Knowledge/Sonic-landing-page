import { MotionDiv } from "@/app/lib/utils";
import Image from "next/image";
import { FaCircleArrowUp } from "react-icons/fa6";

function SonicCard() {
  return (
    <MotionDiv
      data-aos="fade-left"
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="absolute lg:w-[250px] w-[180px] left-[60%] top-12 hidden md:block"
    >
      <div className="bg-[#F2585E] flex items-center justify-center rounded-t-2xl border-2 border-[#B0B0B0]">
        <Image
          className="hidden lg:block"
          src="/images/blacksonic.png"
          alt="logo"
          width={180}
          height={150}
        />
        <Image
          className="lg:hidden block"
          src="/images/blacksonic.png"
          alt="logo"
          width={130}
          height={150}
        />
      </div>
      <div className="flex flex-col items-start justify-center p-5 rounded-b-2xl border-2 border-[#B0B0B0] bg-[#383838] px-2">
        <p className="text-white text-xs">Best offer</p>
        <div className="w-full flex items-start justify-between">
          <p className="text-xs text-white">
            <span className="text-3xl font-bold text-white">368</span> ETH
          </p>
          <FaCircleArrowUp className="rotate-45" size={30} color="white" />
        </div>
      </div>
    </MotionDiv>
  );
}

export default SonicCard;
