import BigTitle from "@/components/BigTitle";
import TitleDescription from "@/components/TitleDescription";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const FAQ = () => {
  return (
    <div className="bg-greyTaxCenter mt-36">
      <div className="w-11/12 m-auto py-16">
        <div className="text-center space-y-6">
          <BigTitle>Lorem ipsum dolor sit amet.</BigTitle>
          <TitleDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            voluptate fugiat?
          </TitleDescription>
        </div>
        <div className="overflow-hidden w-full md:w-8/12 m-auto mt-12">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-lg">
                Lorem ipsum dolor sit.
              </AccordionTrigger>
              <AccordionContent className="text-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold text-lg">
                Lorem ipsum dolor sit.
              </AccordionTrigger>
              <AccordionContent className="text-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-semibold text-lg">
                Lorem ipsum dolor sit.
              </AccordionTrigger>
              <AccordionContent className="text-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-semibold text-lg">
                Lorem ipsum dolor sit.
              </AccordionTrigger>
              <AccordionContent className="text-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-semibold text-lg">
                Lorem ipsum dolor sit.
              </AccordionTrigger>
              <AccordionContent className="text-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
