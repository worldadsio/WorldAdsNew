"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import cofounder from "../../../public/Images/Co-Founder.png";
import CTO from "../../../public/Images/CTO.png";
import ProductOwner from "../../../public/Images/Product Owner.png";
import PartnershipsManager from "../../../public/Images/Partnerships Manager.png";
import ContentSocialMediaManager from "../../../public/Images/ContentManager.png";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Irene Ketegwe",
      role: "Co-Founder",
      image: cofounder,
    },
    {
      id: 2,
      name: "Tahir Ramzan",
      role: "Chief Technology Officer",
      image: CTO,
    },
    {
      id: 3,
      name: "Pascal Knuth",
      role: "Product Owner",
      image: ProductOwner,
    },
    {
      id: 4,
      name: "Salma Mostafa",
      role: "Partnerships Manager",
      image: PartnershipsManager,
    },
    {
      id: 5,
      name: "Zeenat Olaleye",
      role: "Content / Social Media Manager",
      image: ContentSocialMediaManager,
    },
  ];

  return (
    <section id="team" className="py-10 md:py-20 container mx-auto px-4">
      <div className="text-center mb-14">
        <h1 className="text-[40px] md:text-[56px] font-semibold">
          WorldAds
          <span className="text-[#FC3603] ml-4">Team</span>
        </h1>
      </div>

      <div className="max-w-7xl max-sm:px-3 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {teamMembers.slice(0, 3).map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto ">
          {teamMembers.slice(3, 5).map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: StaticImageData; 
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative flex flex-col  items-center">
      <div className="relative w-full aspect-[3/4]  overflow-hidden flex items-end flex-col rounded-2xl bg-gray-100">
        <div className="h-full w-full">
          <Image
            src={member.image}
            alt={`${member.name} photo`}
            width={500}
            height={500}
            // layout="responsive" 
            className="object-contain w-full h-full absolute bottom-10 lg:bottom-10  z-0 "
          />
        </div>
        <div className="absolute bottom-0 w-full z-40  bg-[#FC3603] flex items-start flex-col p-7 sm:p-12 md:p-3 lg:p-7 justify-center text-start space-ys-1 ">
          <h2 className=" text-[20px] lg:text-[24px]  text-white font-medium">
            {member.name}
          </h2>
          <p className="text-[16px] lg:text-[20px] md:w-52  xl:w-auto  truncate text-gray-300 font-normal">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
