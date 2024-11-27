import React from "react";
import Image from "next/image";
import image6 from "../../../public/assets/flash_fill.png";
import { ScrollElement, ScrollLink } from 'react-scroll';
function Waldatoken() {
  return (
    <>
    <section id="wlda-token"  className="container mx-auto">
      <div id="roadmap"  className={`relative overflow-hidden w-full h-auto mt-32`}>
        <div className="absolute left-0 right-0 top-0 w-full z-40">
          <Image
            src={"/Images/Token.png"}
            alt="background"
            width={0}
            height={0}
            layout="responsive"
            priority
            className="w-[956px] h-[537px]"
          />
        </div>
        <div className="grid-background "></div>

        <div className="  h-auto w-full mt-[-70px] flex justify-center sm:mt-20 md:mt-48 p-10  md:p-0">
          <div className="h-auto text-container w-[500px] pt-32 sm:p-10 justify-center text-center flex flex-col">
            <h3 className="text-[32px] md:text-[56px] font-semibold md:leading-[56px] text-black ">
              WLDA Token{" "}
            </h3>
            <p className="text-[16px] font-normal px-6 md:px-0 leading-[22px] mt-5 md:mt-8 text-black/50">
              The $WLDA token is at the heart of Worldads’ ecosystem, designed
              to facilitate participation in decentralized advertising network
              rewards.
            </p>
            <h1 className="font-medium text-black/50 text-[18px] md:text-[20px] mt-10">
              Worldads node operators also earn <br /> $WLDA for processing ad
              transactions.
            </h1>
            <div className="bg-[#FC3603] bg-opacity-5 md:ml-[-20px] flex items-center mt-8 gap-4 max-sm:px-4  py-3 md:px-7 md:py-5 rounded-full w-full md:w-[480px] ">
              <Image
                src={image6}
                alt="logo"
                width={0}
                height={0}
                className="h-[20px] w-[20px]  "
              />
              <h1 className="text-[14px]  md:text-[14px] font-normal">
                Please note that no $WLDA token has been minted at this time
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
}

export default Waldatoken;


