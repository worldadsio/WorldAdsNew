import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/discord.png";
import image2 from "../../../public/assets/ant-design.png";
import image3 from "../../../public/Images/Hero.png";
import { Outfit_font } from "@/fonts";
import Link from "next/link";
function Herosection() {
  return (
    <section id="herosection" className="container mx-auto relative">
      <div className="grid-background  pt-400"></div>
      <div className="text-container w-full pt-32 md:pt-52 px-2 sm:px-0 md:max-w-[80%] m xl:max-w-[50%] mx-auto">
        <h1
          className={` text-[40px] md:text-[56px] leading-[56px] font-semibold text-balance text-center ${Outfit_font.className}`}
        >
          Decentralizing The 34 Billion Dollar
          <span className="text-[#FC3603] pl-4">
            Digital Out-of-Home Advertising
          </span>
        </h1>
        <p className="text-[16px] px-3 sm:px-0 text-center font-normal text-black text-opacity-50 pt-6 max-w-[496px] mx-auto">
          Worldads is building a decentralized, blockchain-powered advertising
          network that will disrupt the DOOH advertising industry and activate a
          global ad revenue sharing economy.
        </p>
        <div className="text-container text-center my-10 w-full lg:max-w-[60%] mx-auto">
          <div className=" text-container mt-10 flex items-center gap-8 justify-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.worldads.io/"
            >
              <button className="px-6 py-3 border ring-[1px] md:w-[177px] md:h-[60px] ring-gray-300 ring-offset-8 border-black text-black font-semibold text-lg rounded-full hover:bg-gray-100 transition-colors duration-150">
                Learn More
              </button>
            </Link>
            <div className="border-l-2 border-black pl-3">
              <div className="flex items-center gap-3">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/P94JWEwbeE"
                  aria-label="discord"
                >
                  <Image
                    src={image1}
                    alt="logo"
                    width={0}
                    height={0}
                    className="h-8 w-8 "
                  />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/worldadsdotio"
                  aria-label="Twitter"
                >
                  <Image
                    src={image2}
                    alt="logo"
                    width={0}
                    height={0}
                    className="h-8 w-8 "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center image-container ">
        <div className=""></div>
        <Image
          src={image3}
          alt="logo"
          width={0}
          height={0}
          layout="responsive"
          priority
          className="h-[486px] w-[1132px] "
        />
      </div>
    </section>
  );
}

export default Herosection;
