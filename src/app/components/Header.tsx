import Image from "next/image";
import React from "react";
import MainButton from "./ui/MainButton";

function Header() {
  return (
    <header className="border-b-2 border-gray-400/15 flex justify-between py-3 px-5 mx-auto bg-[#DCE2E6] rounded-bl-3xl rounded-br-3xl">
      <div className="flex items-center space-x-2" data-aos="zoom-in">
        <Image
          className="rounded-full border-2"
          src="/images/logosonic.png"
          alt="logo"
          width={47}
          height={47}
        />
        <h1 className="font-bold">Sonic</h1>
      </div>
      <MainButton>Whitepaper</MainButton>
    </header>
  );
}

export default Header;
