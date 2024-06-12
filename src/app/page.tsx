import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Banner from "./components/Banner";
import WhatisSonic from "./components/WhatisSonic";
import CardSection from "./components/CardSection";
import SelectSonic from "./components/SelectSonic";
import SonicLab from "./components/SonicLab";
import MemeCoin from "./components/MemeCoin";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <Banner />
      <WhatisSonic />
      <CardSection />
      <SelectSonic />
      <SonicLab />
      <Banner />
      <MemeCoin />
    </main>
  );
}
