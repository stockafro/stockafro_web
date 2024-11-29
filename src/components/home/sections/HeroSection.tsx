"use client";

import Button from "@/components/Button";
import { Header1, Paragraph2, Paragraph3 } from "@/components/Text";
import React from "react";
import ElevatingBrands from "./others/ElevatingBrands";
import AOS from "aos";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <div className="  ">
      <div className="xl:py-[120px] py-[50px] pt-[140px] bg-p_black pb-[150px]">
        <div className=" container1 grid grid-cols-1 lg:grid-cols-2 gap-2 items-center ">
          {" "}
          <div
            className="col-span-1 order-2 lg:order-1"
            data-aos="fade-up-right"
          >
            <Header1 className="text-white mt-4 xl:mt-0  ">
              Capturing <span className="text-primary"> Moments</span>,
              Transforming <span className="text-primary"> Memories</span> Into
              Timeless Works of Art<span className="text-primary">.</span>
            </Header1>
            <Paragraph3 className="mt-[16px] mb-[48px] text-white">
              Professional Photography for Life{"'"}s Most Precious Events
            </Paragraph3>
            <div className="flex  xl:flex-row flex-col items-center mt-4 gap-[24px] xl:gap-[32px]">
              <Button
                text="Book a Session"
                href="/contact-us"
                isLink={true}
                additionalClasses="border-primary xl:w-fit w-full "
              />
              <Button
                text="View Gallery"
                href="/gallery"
                isLink={true}
                color="text-white"
                backgroundColor=" bg-p_black"
                border="border-2 border-white "
                additionalClasses=" xl:w-fit w-full "
              />
            </div>
          </div>
          <div className="col-span-1 order-1 lg:order-2 flex justify-center">
            <div className=" relative  h-[200px] w-[250px] sm:h-[400px] sm:w-[500px]">
              <div
                style={{ transform: "rotate(-12deg)" }}
                className=" rounded-lg border-4 relative border-white  bg-primary h-[200px] w-[250px] sm:h-[400px] sm:w-[500px]"
              ></div>
              <div
                style={{ transform: "rotate(8deg)" }}
                className=" bg-primary h-full w-full overflow-hidden absolute -top-[20px] -right-[20px] p-4 border-4 border-white rounded-lg object-cover"
              >
                <img
                  data-aos="fade-left"
                  src="/images/hero_photo.jpg"
                  alt=""
                  className="w-ful object-cover h-full w-full  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" -mt-[42px] ">
        <ElevatingBrands />
      </div>
    </div>
  );
}

export default HeroSection;
