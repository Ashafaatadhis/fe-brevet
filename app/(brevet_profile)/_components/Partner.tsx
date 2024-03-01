"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import SmallTitle from "@/components/SmallTitle";

const Partner = () => {
  return (
    <div className="bg-greyTaxCenter my-16">
      <div className="w-11/12 flex flex-col items-center justify-center m-auto py-12">
        <SmallTitle className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </SmallTitle>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-8/12"
        >
          <CarouselContent className="items-center">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                src={"/djp.png"}
                alt="djp"
                height={75}
                width={75}
                className="m-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                src={"/pertapsi.png"}
                alt="pertapsi"
                height={130}
                width={130}
                className="m-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                src={"/majalah-pajak.png"}
                alt="majalah-pajak"
                height={250}
                width={250}
                className="m-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                src={"/hivefive2.png"}
                alt="hivefive2"
                height={200}
                width={200}
                className="m-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                src={"/DDTC.png"}
                alt="DDTC"
                height={200}
                width={200}
                className="m-auto"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Partner;
