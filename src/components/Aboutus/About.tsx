import Image from "next/image";
import React from "react";
import image4 from "../../../public/Images/About.png";

function About() {
  return (
    <div className="w-full max-auto bg-red-500 px-20">
      <div className="flex justify-between mx-auto gap-20 items-center">
        <div>
          <h3>About WorldAds</h3>
          <h1>
            WorldAds is transforming the fast growing digital out-of-home (DOOH)
            advertising industry
          </h1>
          <p>
            With innovative, blockchain-enabled smart screens / nodes mounted on
            vehicles. The smart nodes deliver location-based, real-time ads in
            high-traffic urban areas, ensuring precision targeting and audience
            engagement.
            <br/>
            By leveraging blockchain technology, WorldAds
            democratizes access into the ad economy through de-pin ownership
            while enhancing transparency, efficiency, and accountability, making
            it a game-changer for advertisers seeking impactful and measurable
            campaigns.
          </p>
        </div>

        <div className=" bg-gray-400 p-10 flex justify-center">
          <Image
            src={image4}
            alt="logo"
            width={0}
            height={0}
            layout="responsive"
            priority
            className="md:h-[486px] w-[1132px] "
          />
        </div>
      </div>
    </div>
  );
}

export default About;
