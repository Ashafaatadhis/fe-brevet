import { Button } from "@/components/ui/button";
import { Blocks } from "lucide-react";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <div className="w-9/12 m-auto my-16">
      <div className="bg-shadesYellowTaxCenter1/30 flex flex-col md:flex-row items-center justify-between rounded-lg py-8 px-12">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos?
          </p>
        </div>
        <div className="mt-5 md:mt-0 flex flex-col md:flex-row items-center space-x-0 md:space-x-5 space-y-5 md:space-y-0">
          <Button asChild variant={"outline"}>
            <Link href={"#"} className="flex flex-row items-center space-x-3">
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
  );
};

export default CTA;
