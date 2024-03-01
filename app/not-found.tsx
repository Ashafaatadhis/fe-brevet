import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center m-auto space-y-6">
      <div className="text-[48px] font-semibold text-center">
        Page Not Found
      </div>
      <Image src={"/not-found.gif"} alt="not-found" width={300} height={300} />
      <Link href="/brevet">
        <Button variant={"secondary"} className="text-[14px]">
          Back to Home Page
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
