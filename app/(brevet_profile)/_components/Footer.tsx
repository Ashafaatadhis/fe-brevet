import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-11/12 m-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-0 md:gap-x-10 my-16">
          <div className="col-span-2 space-y-6">
            <Image
              src={"/logo-tax-center.png"}
              alt="logo"
              width={150}
              height={150}
            />
            <p className="w-full md:w-8/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              error commodi eaque expedita similique.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 mt-8 md:mt-0">
            <h1 className="font-semibold">Lorem, ipsum.</h1>
            <Link href={"#"}>lorem</Link>
            <Link href={"#"}>lorem</Link>
            <Link href={"#"}>lorem</Link>
            <Link href={"#"}>lorem</Link>
          </div>
          <div className="flex flex-col gap-y-2 mt-8 md:mt-0">
            <h1 className="font-semibold">Lorem, ipsum.</h1>
            <Link href={"#"}>lorem</Link>
            <Link href={"#"}>lorem</Link>
            <Link href={"#"}>lorem</Link>
            <Link href={"#"}>lorem</Link>
          </div>
          <div className="flex flex-col gap-y-2 mt-8 md:mt-0">
            <h1 className="font-semibold">Lorem, ipsum.</h1>
            <Link href={"#"}>lorem</Link>
            <Link href={"#"}>lorem</Link>
            <Link href={"#"}>lorem</Link>
            <Link href={"#"}>lorem</Link>
          </div>
          <div className="flex flex-col gap-y-2 mt-8 md:mt-0">
            <h1 className="font-semibold">Lorem, ipsum.</h1>
            <Link href={"#"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <Link href={"#"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="text-center my-8">
        <h1 className="font-semibold text-sm">
          &copy; 2024{" "}
          <span className="hover:text-yellowTaxCenter drop-shadow-xl">
            IT Team Tax Center Gunadarma
          </span>
          . All rights reserved.
        </h1>
      </div>
    </>
  );
};

export default Footer;
