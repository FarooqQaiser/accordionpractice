import React from "react";
import AccordionItem from "./AccordionItem";
import { Link } from "react-router-dom";

export default function Accordion(props) {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5 p-10 ">
      <p className="text-lg font-bold">
        This Accordion is without the imports from "react-accessible-accordion"
        package
      </p>
      <div className="bg-[#f0f0f0] w-full flex flex-col items-start">
        {props.items.map((item, index) => (
          <AccordionItem
            key={index}
            id={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <Link
        to={"./AccessibleAccordionImported"}
        className="bg-blue-400 rounded-lg text-white p-2"
      >
        Go to AccessibleAccordionImported page
      </Link>
    </div>
  );
}
