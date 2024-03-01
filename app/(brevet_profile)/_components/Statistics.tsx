import BigTitle from "@/components/BigTitle";
import SmallTitle from "@/components/SmallTitle";
import TitleDescription from "@/components/TitleDescription";
import { stat } from "fs";
import Image from "next/image";
import React from "react";

const statsData = [
  {
    id: 1,
    value: "4,000+",
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et?",
  },
  {
    id: 2,
    value: "600%",
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et?",
  },
  {
    id: 3,
    value: "10k",
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et?",
  },
  {
    id: 4,
    value: "200+",
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et?",
  },
];

const Statistics = () => {
  return (
    <div className="my-36">
      <div className="w-11/12 m-auto">
        <div className="space-y-6 mb-12">
          <SmallTitle>Lorem, ipsum.</SmallTitle>
          <BigTitle>Lorem ipsum dolor sit.</BigTitle>
          <TitleDescription className="w-full md:w-5/12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
            perferendis? Illo eveniet, veritatis facere deserunt pariatur ipsum.
          </TitleDescription>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-12 md:gap-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-12">
            {statsData.map((stats) => {
              return (
                <div
                  className="flex flex-col items-center justify-center space-y-4"
                  key={stats.id}
                >
                  <h1 className="text-yellowTaxCenter/70 drop-shadow-xl font-bold text-5xl">
                    {stats.value}
                  </h1>
                  <h1 className="font-semibold text-xl">{stats.title}</h1>
                  <p className="w-full md:w-8/12 text-center">
                    {stats.description}
                  </p>
                </div>
              );
            })}
          </div>
          <Image
            src={"/stats.jpg"}
            alt="stats"
            height={750}
            width={750}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
