import React from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion(props) {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5 p-10 ">
      {props.items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
