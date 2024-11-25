import React from "react";
import Image from "next/image";
import cofounder from "../../../public/Images/Cofounder.png";
import CTO from "../../../public/Images/CTO.png";
function Team() {
  return (
    <section id="team" className="py-10 md:py-20 container mx-auto">
      <div className=" text-center">
        <h1
          className={` text-[40px] md:text-[56px] lg:leading-[56px] font-semibold text-balance text-center`}
        >
          WorldAds
          <span className="text-[#FC3603] pl-4">Team</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center  items-center gap-10 mt-14">
        <div className="">
          <div className="h-[186px] md:h-[280px] w-[186px] md:w-[280px] p-2 bg-red-500 rounded-full flex justify-center items-center">
            <Image
              src={cofounder}
              alt="logo"
              width={0}
              height={0}
              className="w-[170px] h-[170px] md:h-[260px] md:w-[260px]"
            />
          </div>
          <div className="text-center mt-10 space-y-2">
            <h1 className="text-[24px] md:text-[32px] leading-[32px] font-normal">
              Irene Ketegwe
            </h1>
            <p className="text-[14px] md:text-[18px] font-light text-black opacity-50">
              Co-Founder
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-[186px] md:h-[280px] w-[186px] md:w-[280px] p-2 bg-red-500 rounded-full flex justify-center items-center">
            <Image
              src={CTO}
              alt="logo"
              width={0}
              height={0}
              className="w-[170px] h-[170px] md:h-[260px] md:w-[260px]"
            />
          </div>
          <div className="text-center mt-10 space-y-2">
            <h1 className="text-[24px] md:text-[32px] leading-[32px] font-normal">
              Tahir Ramzan
            </h1>
            <p className="text-[14px] md:text-[18px] font-light text-black opacity-50">
              CTO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
