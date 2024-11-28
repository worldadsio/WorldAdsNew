"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image6 from "../../../public/Images/Economic.png";
import Ride from "../../../public/Images/Ride.png";
import image7 from "../../../public/Images/Frame.png";

function Worldsection() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [isVertical, setIsVertical] = useState<boolean>(false);
  const swiperRef = useRef<any | null>(null);

  const buttons = [
    { id: 1, label: "Node Operators" },
    { id: 2, label: "Ride & Earn" },
    { id: 3, label: "Get Seen With WorldAds" },
  ];

  const sections = [
    {
      id: 1,
      title: "Node Operators",
      description:
        "Own a Worldads screen / node and become a cornerstone of a new model of digital advertising, you can choose to manage your smart digital screen or delegate to an operator and start earning as advertisers choose your prime ad slots.",
      image: image6,
      link: "https://docs.worldads.io/the-worldads-model/node-operators",
    },
    {
      id: 2,
      title: "Ride & Earn",
      description:
        "Transform every mile into a profitable venture as our Smart Rooftop Digital Screens turn miles into money, making every trip count.",
      image: Ride,
      link: "https://docs.worldads.io/the-worldads-model/ride-and-earn",
    },
    {
      id: 3,
      title: "Get Seen With WorldAds",
      description:
        "Our Smart digital nodes are hard to miss as you can seize the spotlight in bustling areas with high-traffic visibility. Make your brand the center of attention with Worldads.",
      image: image7,
      link: "https://docs.worldads.io/the-worldads-model/advertise-with-worldads",
      extraData: [
        {
          title: "Precision Targeting",
          description: "Reach your ideal audience at the right time and place.",
        },
        {
          title: "Dynamic HD Quality Ads",
          description:
            "Captivate viewers with stunning, crystal-clear advertisements.",
        },
        {
          title: "Scalable Geofenced Campaigns",
          description: "Customize and scale your campaigns with precision.",
        },
      ],
    },
  ];

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(buttonId - 1);
    }
  };

  useEffect(() => {
    const updateDirection = () => {
      setIsVertical(window.innerWidth >= 1024);
    };

    updateDirection();
    window.addEventListener("resize", updateDirection);
    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    <section id="features" className="max-md:mt-10 md:py-20 container mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveButton(swiper.activeIndex + 1)}
        direction={isVertical ? "vertical" : "horizontal"}
        className="w-full h-auto md:h-[100vh]"
        speed={1400}
      >
        {sections.map((section) => (
          <SwiperSlide key={section.id} className="h-full">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 items-center sm:items-start pb-12 gap-10 mx-6 ${
                section.id === 1 ? "max-sm:pt-40" : ""
              } ${section.id === 2 ? "max-sm:pt-80" : ""}`}
            >
              <div className="rounded-[60px] flex justify-center items-center w-full md:h-[811px] px-10 py-16 md:px-20 bg-[#FAFAFA]">
                <div className="w-full space-y-8 md:space-y-10 text-left">
                  <h1 className="text-[32px] md:text-[56px] font-medium leading-[46px] md:leading-[60px]">
                    The WorldAds Economic Model
                  </h1>
                  <p className="text-[18px] md:text-[20px] max-w-md font-normal leading-[22px] text-black opacity-50">
                    WorldAds transforms advertising with tokenized smart
                    screens, blockchain ownership, mobility, and geofencing for
                    a scalable decentralized ad network.
                  </p>
                  <div className="lg:flex flex-col hidden space-y-4">
                    {buttons.map((button) => (
                      <button
                        key={button.id}
                        type="button"
                        onClick={() => handleButtonClick(button.id)}
                        className={`px-6 md:px-3 py-2 text-[24px] font-bold rounded-[20px] w-full text-left lg:pl-10 ${
                          activeButton === button.id
                            ? "bg-[#FC3603] h-[111px] shadow-sm w-auto xl:w-[427px] text-white"
                            : "h-[70px] text-black/30"
                        }`}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-[60px] border-2 xl:h-[811px] flex flex-col px-10 xl:px-16 py-10 items-start border-gray-100 overflow-y-auto w-full">
                <div className="flex flex-col items-start w-full">
                  <div className="flex justify-center w-full">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={0}
                      height={0}
                      className={`${
                        section.id === 2
                          ? "md:h-[418px] xl:ml-[-200px] mb-[-50px] w-[840px]"
                          : "mb-10 "
                      } ${
                        section.id === 3
                          ? "h-[130px] mt-10 w-[200px]"
                          : "mb-10 md:h-[360px] w-[340px]"
                      }`}
                    />
                  </div>
                  <div className="w-full xl:max-w-[90%]">
                    <h1 className="text-[40px] font-medium leading-10">
                      {section.title}
                    </h1>
                    <p className="text-[14px] mt-2 md:text-[16px] text-black opacity-70">
                      {section.description}
                    </p>

                    {section.id === 3 && section.extraData && (
                      <ul className="mt-6 text-[14px] md:text-[16px] md:mb-[-0px] leading-[22px] text-black opacity-70">
                        {section.extraData.map((item, index) => (
                          <li key={index} className="mb-4">
                            <h3 className="font-semibold text-[18px]">
                              {item.title}
                            </h3>
                            <p className="text-[14px] md:text-[16px] text-black opacity-70">
                              {item.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={section.link}
                    >
                      <button className="px-6 py-3 mt-14 border ring-[1px] w-[180px] h-[50px] md:w-[177px] md:h-[60px] ring-gray-300 ring-offset-8 border-black text-black font-semibold text-lg rounded-full hover:bg-gray-100 transition-colors duration-150">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Worldsection;
