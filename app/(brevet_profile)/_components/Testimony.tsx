import Image from "next/image";
import React from "react";

const Testimony = () => {
  return (
    <div className="bg-greyTaxCenter my-16">
      <div className="w-11/12 m-auto py-12">
        <div className="">
          <Image
            src="/djp.png"
            alt="djp"
            width={50}
            height={50}
            className="m-auto"
          />
          <h1 className="text-2xl xl:text-4xl text-center m-auto font-semibold w-full md:w-10/12 my-10">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo at
            ad reiciendis corporis nisi distinctio."
          </h1>
          <Image
            src="/person.jpg"
            alt="person testimony"
            width={80}
            height={80}
            className="rounded-full object-cover m-auto"
          />
          <div className="m-auto text-center space-y-2 mt-5">
            <h1 className="font-bold text-2xl">Lorem ipsum dolor</h1>
            <p>Lorem ipsum, Lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
