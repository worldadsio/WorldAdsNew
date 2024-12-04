"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { NavData } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../../public/assets/Brandlogo.png";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observeSections = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      observeSections();
    }
  }, [pathname, observeSections]);

  const handleNavigate = (item: any) => {
    setActiveSection(item.link);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(item.link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.getElementById(item.link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed w-full z-50 top-0 bg-white sm:bg-transparent sm:top-8 left-0 right-0 max-md:px-2">
      <div className="max-lg:px-2 lg:container mx-auto rounded-2xl sm:rounded-[20px] drop-shadow-sm">
        <div className="flex items-center gap-6 justify-between">
          <div className="flex items-center justify-between max-lg:w-full max-md:py-3">
            <div className="w-[160px] h-[36px] cursor-pointer flex items-center">
              {pathname === "/" ? (
                <ScrollLink
                  to="herosection"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  onClick={() => setActiveSection("")}
                >
                  <Image
                    src={logo}
                    alt="logo"
                    width={0}
                    height={0}
                    className="w-[167px] h-[38px] cursor-pointer"
                  />
                </ScrollLink>
              ) : (
                <Link href="/">
                  <Image
                    src={logo}
                    alt="logo"
                    width={0}
                    height={0}
                    className="cursor-pointer w-[167px] h-[38px]"
                  />
                </Link>
              )}
            </div>
            <div className="mr-2 flex lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? (
                  <div className="bg-black/10 border-2 border-black flex justify-center items-center pt-[5px] h-12 rounded-full w-20 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M20.25 12h-8.25"
                      />
                    </svg>
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
          </div>
          <nav className="hidden lg:flex items-center justify-between rounded-full px-2 py-1.5 border-2 border-black bg-white">
            {NavData.map((item, index) => (
              <li key={index} className="flex cursor-pointer items-center">
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={300}
                  offset={-70}
                  onClick={() => handleNavigate(item)}
                  className={`text-xl px-6 py-1.5 rounded-full cursor-pointer font-medium ${
                    activeSection === item.link && pathname === "/"
                      ? "bg-[#FC3603] text-white shadow-[0_0px_60px_-10px_rgb(252,54,3)]"
                      : ""
                  }`}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </nav>
          <div className="hidden lg:flex items-center justify-end">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.worldads.io/"
            >
              <button className="px-6 py-3 border ring-[1px] w-[177px] h-[60px] bg-black text-white ring-gray-300 ring-offset-8 border-black font-semibold text-lg rounded-full transition-colors duration-150">
                Litepaper
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden absolute max-sm:top-2 sm:top-[-23px] left-0 right-2 w-full border-2 border-black p-6 bg-white rounded-[30px] drop-shadow-md`}
        >
          <div className="mr-2 flex justify-end lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                ""
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 gap-3 max-lg:text-center w-auto px-4 py-4">
              {NavData.map((item, index) => (
                <ScrollLink
                  key={index}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={300}
                  offset={-70}
                  onClick={() => {
                    setActiveSection(item.link), setIsOpen(false);
                  }}
                  className={`text-xl px-6 py-1.5 rounded-full cursor-pointer font-medium ${
                    activeSection === item.link
                      ? "bg-[#FC3603] text-white shadow-[0_0px_60px_-10px_rgb(252,54,3)]"
                      : ""
                  }`}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
