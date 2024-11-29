"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { Paragraph2, ParagraphLink1, ParagraphLink2 } from "./Text";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  if (pathname.includes("/admin")) {
    return null; // Return null to hide the navbar
  }


  return (
    <div
      className={
        ["/contact-us", "/privacy-policy", "/terms-of-service"].includes(
          pathname
        )
          ? "bg-bg_gray  py-[8px] "
          : " bg-white py-[8px] fixed flex w-full z-20"
      }
    >
      <div className="  w-full">
        <div className=" container1 flex justify-between w-full items-center">
          <img src="/images/logo.png" alt="" className="h-[50px]" />
          <div className="  gap-[48px] items-center hidden lg:flex">
            <Link href="/">
              <ParagraphLink1
                className={pathname === "/" ? "text-primary font-bold " : " "}
              >
                Home
              </ParagraphLink1>
            </Link>
            <Link href="/about-us">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "/about-us" ? "text-primary font-bold " : "  "
                }
              >
                About
              </ParagraphLink1>
            </Link>
            <Link href="/gallery">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "/gallery" ? "text-primary font-bold " : "  "
                }
              >
                Gallery
              </ParagraphLink1>
            </Link>
          </div>
          <Button
            text="Contact us"
            href="/contact-us"
            isLink={true}
            additionalClasses=" border-0  min-w-[152px] hidden lg:block"
          />{" "}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <Image
                height={2}
                width={25}
                src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
                alt="menu"
                className=""
              />
            </button>
          </div>
        </div>

        {/* mobile dropdown */}
        {menuOpen && (
          <div className="p-[24px] flex flex-col justify-center items-center">
            <div className=" container1 flex flex-col w-full space-y-[24px] justify-between items-center">
              <Link href="/" onClick={toggleMenu}>
                <ParagraphLink1
                  className={pathname === "/" ? "text-primary font-bold " : " "}
                >
                  Home
                </ParagraphLink1>
              </Link>
              <Link href="/about-us" onClick={toggleMenu}>
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "/about-us" ? "text-primary font-bold " : "  "
                  }
                >
                  About
                </ParagraphLink1>
              </Link>
              <Link href="/gallery" onClick={toggleMenu}>
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "/gallery" ? "text-primary font-bold " : "  "
                  }
                >
                  Gallery
                </ParagraphLink1>
              </Link>
              <Button
                text="Contact us"
                href="/contact-us"
                isLink={true}
                onClick={toggleMenu}
                additionalClasses=" border-0  sm:min-w-[152px] min-w-full "
              />{" "}
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
