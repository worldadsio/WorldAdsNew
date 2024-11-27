import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/Brandlogo2.png";
import twitter from "../../../public/assets/x.png";
import LinkedIn from "../../../public/assets/linkedin.png";
import Telegram from "../../../public/assets/telegram-circle.png";
import discord from "../../../public/assets/discord (1).png";
import medium from "../../../public/assets/medium.png";
export default function Footer() {
  return (
    <footer className="bg-[#181818]  text-white py-10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-start flex-wrap">
          <div className="w-[461px] flex justify-center leading-[60px]">
            <h1 className=" text-[32px] max-md:text-center max-md:leading-10 md:text-[56px] font-semibold">
              Disrupting Digital Advertising
            </h1>
          </div>
          <div className="grid grid-cols-1 text-center md:text-start md:grid-cols-2 text-[18px] font-medium leading-[23px] mt-10 md:mt-4 gap-6 text-sm">
            <Link href=" https://worldadsio.medium.com/" className="hover:underline">
              Blog
            </Link>
            <Link href="/privacypolicy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="https://docs.worldads.io/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/termsService" className="hover:underline">
              Terms Of Service
            </Link>
          </div>
        </div>
        <div className="w-full flex max-md:justify-center">
          <Image
            src={logo}
            alt="WorldAds Logo"
            width={0}
            height={0}
            className="mt-12 md:mt-20 w-[167px] h-[38px]"
          />
        </div>
        <div className="flex  w-full flex-col md:flex-row justify-center md:justify-between gap-6 items-center  mt-10">
          <p className="text-sm w-full  flex justify-center md:w-auto text-[#9C9C9C]">
            &copy;2024 WorldAds Tech DAO LLC. All Rights Reserved
          </p>
          <hr className="w-[551px] border hidden  md:block border-[#7E7E7E]" />
          <div className="flex gap-5 w-full justify-center md:w-auto items-center ">
            <Link
              href="https://x.com/worldadsdotio"aria-label="Twitter"
            >
              <Image src={twitter} alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/company/worldadsdotio/" aria-label="LinkedIn">
              <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="https://t.me/worldadscommunity" aria-label="Telegram">
              <Image src={Telegram} alt="Telegram" width={24} height={24} />
            </Link>
            <Link href="https://discord.gg/P94JWEwbeE" aria-label="discord">
              <Image src={discord} alt="discord" width={24} height={24} />
            </Link>
            <Link href="https://worldadsio.medium.com/" aria-label="medium">
              <Image src={medium} alt="medium" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
