import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-11/12 m-auto mt-[140px] md:mt-[210px]">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <Link
            href={"#"}
            className="bg-yellowTaxCenter/30 flex flex-row space-x-3 md:justify-center items-center m-auto md:m-0 w-fit py-1 px-2 rounded-full"
          >
            <p className="py-1 px-2 bg-white w-fit rounded-full border border-yellowTaxCenter text-[10px] md:text-[13px] font-semibold text-blackTaxCenter">
              Lorem ipsum.
            </p>
            <div className="flex flex-row text-center items-center text-[13px] font-semibold text-blackTaxCenter">
              <p>Lorem ipsum dolor sit amet.</p>
              <ArrowRight />
            </div>
          </Link>
          <div className="mt-6">
            <h1 className="font-bold text-[42px] md:text-[50px] text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="text-gray-600 w-10/12 mt-6 m-auto md:m-0 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              nesciunt recusandae architecto ipsum velit qui exercitationem
              expedita temporibus.
            </p>
            <div className="flex flex-row justify-center items-center md:justify-start md:items-start space-x-8 mt-8 m-auto">
              <Button asChild variant={"outline"}>
                <Link
                  href={"#"}
                  className="flex flex-row items-center space-x-3"
                >
                  <Blocks />
                  <p>Learn More</p>
                </Link>
              </Button>
              <Button asChild variant={"yellowTaxCenter"}>
                <Link href={"/sign-up"}>Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
        <Image
          alt="hero image"
          src={"/hero-image.jpg"}
          className="rounded-lg mb-7 order-first md:order-last"
          height={750}
          width={750}
        />
      </div>
    </div>
  );
};

export default Hero;
