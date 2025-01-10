"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../../public/assets/discord.png";
import image2 from "../../../public/assets/ant-design.png";
import image3 from "../../../public/Images/Hero.png";
import { Outfit_font } from "@/fonts";
import Link from "next/link";
function Herosection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
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

      <div className="w-full flex justify-center  items-center relative">
        <Image
          src={image3}
          alt="Hero background"
          layout="responsive"
          priority
          className="h-[486px] w-[1132px] object-cover"
        />
        {/* <div className="w-full flex bg-red-500 justify-center rounded-xl ">
          <div
            style={{
              clipPath: "polygon(5% 0%, 58% 8%, 60% 98%, 3% 99%)",
            }}
            className=" absolute top-[33px]  right-0 rounded-2xl skew-y-3 w-[70%] mx-auto mt-10 h-[30vh] flex items-center shadow-inner"
          >
            <iframe
              src="https://s3-figma-videos-production-sig.figma.com/video/1393805997227218407/TEAM/7f76/8090/-e289-45ef-8ae7-e61996961b49?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BAwKbifxlPAt~4n-XWAEiEt~ZNxVdqvd7YMOyDXV5rYmHCZ68TN~9viDZ6pNBN7eBqYKCnE-y8H9nWXgjztQMJJ8WPK3pAUjqHpWONGGOsQ10jLsgHmiq-rxm1PuOCFBOyLteGVc~pMdQqOvRAW4HyTuUkkXJhmsM8-7XT73fHW7VZJ1lKhxscmpwlxLb6gSIvsKO3nNCIGst73OjFjcDZET5jO51vYfjFpqbZNoceUPDVhqmJ86qKDqbym-eGON8guwQnuP6ZVcEaYrjP6dlma0Osj6t5FjM4MFy-L4XS5K6-G7EdGOs4TEdH9Q7aZcV68Wo2-YUeljWXLXnBvbVw__"
              title="Promotional Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 right-0 w-full h-full rounded-2xl shadow-inner  object-cover"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Herosection;
