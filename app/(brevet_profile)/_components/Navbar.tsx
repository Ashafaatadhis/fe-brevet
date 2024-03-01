import { Button } from "@/components/ui/button";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white py-6 fixed w-full shadow-md mb-32 z-10">
      <div className="flex flex-row items-center w-11/12 mx-auto justify-between">
        <div className="flex flex-row items-center justify-start space-x-14">
          <Image
            src="/logo-tax-center.png"
            alt="logo"
            width={150}
            height={150}
          />
          <div className="hidden md:flex flex-row items-center space-x-6 font-semibold text-gray-600">
            <Link href={"#"}>Link 1</Link>
            <Link href={"#"}>Link 2</Link>
            <Link href={"#"}>Link 3</Link>
            <Link href={"#"}>Link 4</Link>
            <Link href={"#"}>Link 5</Link>
          </div>
        </div>
        <Button className="hidden md:block" variant={"yellowTaxCenter"} asChild>
          <Link href={"/sign-up"}>Join Now</Link>
        </Button>
        <AlignRight className="md:hidden text-gray-600 w-7 h-7" />
      </div>
    </nav>
  );
};

export default Navbar;
