import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function AccessibleAccordionImported(props) {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5 p-10">
      <p className="text-lg font-bold">
        This Accordion is from the imports of "react-accessible-accordion"
        package
      </p>
      <Accordion allowZeroExpanded allowMultipleExpanded className="w-full">
        {props.items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Link to={"../"} className="bg-blue-400 rounded-lg text-white p-2">
        Go to Accordion page
      </Link>
    </div>
  );
}
