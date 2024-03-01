import BigTitle from "@/components/BigTitle";
import SmallTitle from "@/components/SmallTitle";
import TitleDescription from "@/components/TitleDescription";
import {
  BarChart2,
  Command,
  IconNode,
  Mail,
  MessageSquare,
  Smile,
  Zap,
} from "lucide-react";
import React from "react";

const benefitData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint.",
    icon: Mail,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint.",
    icon: BarChart2,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint.",
    icon: Smile,
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint.",
    icon: Command,
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint.",
    icon: MessageSquare,
  },
];

const Benefit = () => {
  return (
    <div className="w-11/12 m-auto py-16">
      <div className="flex flex-col items-center justify-center m-auto space-y-6">
        <SmallTitle>Benefit</SmallTitle>
        <BigTitle className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </BigTitle>
        <TitleDescription className="w-full md:w-7/12 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, atque
          esse. Dolorum id corrupti excepturi animi magni aspernatur porro
          blanditiis.
        </TitleDescription>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center mt-16 gap-y-16">
        {benefitData.map((benefit) => {
          return (
            <div className="space-y-4 text-center" key={benefit.id}>
              <div className="bg-shadesYellowTaxCenter1/20 rounded-full p-2 w-fit shadow-md m-auto">
                <div className="bg-shadesYellowTaxCenter1/30 rounded-full p-2 w-fit">
                  <benefit.icon className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <h1 className="font-semibold text-xl">{benefit.title}</h1>
              <p className="w-full md:w-8/12 m-auto">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefit;
