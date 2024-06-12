import { MotionDiv } from "@/app/lib/utils";
import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

function BannerItem() {
  return (
    <div
      data-aos="fade-right"
      className="banner-item px-2 h-[50px] border-t-2 border-b-2 border-dashed border-[#3B3F3E] flex items-center justify-center gap-2"
    >
      <FaCircleArrowUp size={30} color="#F4555B" className="rotate-45" />
      <p className="text-2xl font-extrabold text-slate-900">MEME COIN</p>
    </div>
  );
}

export default BannerItem;
