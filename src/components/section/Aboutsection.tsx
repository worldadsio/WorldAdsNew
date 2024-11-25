import React from "react";
import Image from "next/image";
import image5 from "../../../public/Images/About.png";
function Aboutsection() {
  return (
    <section id="about" className="max-md:mt-20 md:py-20 container mx-auto lg:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="max-sm:mx-6 rounded-[60px] p-4  xl:p-12 h-auto md:h-auto  ">
          <div className=" w-full xl:max-w-[70%] space-y-7">
            <h3 className="text-[18px] font-bold text-black opacity-20">
              About WorldAds
            </h3>
            <h1 className="text-[28px] md:text-[38px] font-normal leading-10 ">
              WorldAds is transforming the fast growing digital out-of-home
              (DOOH) advertising industry
            </h1>
            <p className="text-[18px] leading-[22px] text-black opacity-50">
              With innovative, blockchain-enabled smart screens / nodes mounted
              on vehicles. The smart nodes deliver location-based, real-time ads
              in high-traffic urban areas, ensuring precision targeting and
              audience engagement.
              <br />
              <br />
              By leveraging blockchain technology, WorldAds democratizes access
              into the ad economy through de-pin ownership while enhancing
              transparency, efficiency, and accountability, making it a
              game-changer for advertisers seeking impactful and measurable
              campaigns.
            </p>
          </div>
        </div>
        <div className="max-sm:mx-6 rounded-[60px] mx-3 md:mx-0 p-8 sm:p-12 h-auto w-[567] bg-[#FAFAFA]">
          <div className="p-10 flex justify-center">
            <Image
              src={image5}
              alt="logo"
              width={0}
              height={0}
              className=" h-[237px] w-[235px] md:h-[394px] md:w-[391px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutsection;
