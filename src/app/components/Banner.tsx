import { MotionDiv } from "../lib/utils";
import BannerItem from "./ui/BannerItem";

function Banner() {
  return (
    <div className="banner bg-[#F6C3C5] w-[1600px] h-[70px] border-2 border-t-[#3B3F3E] border-b-[#3B3F3E] py-2 flex items-center justify-start  ">
      <BannerItem />
      <BannerItem />
      <BannerItem />
      <BannerItem />
      <BannerItem />
      <BannerItem />
    </div>
  );
}

export default Banner;
