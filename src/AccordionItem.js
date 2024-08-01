import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function AccordionItem(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <button
        id={`accordion-button-${props.id}`}
        role="button"
        accordion-expanded={`${isExpanded}`}
        accordion-control={`accordion-content-${props.id}`}
        onClick={handleToggle}
        className="flex flex-row items-center gap-2 w-full text-left p-5 border-b-gray-500 border hover:bg-[#DDDDDD] "
      >
        <IoIosArrowDown />
        {props.title}
      </button>
      <div
        id={`accordion-content-${props.id}`}
        role="region"
        accordion-labelledby={`accordion-button-${props.id}`}
        hidden={!isExpanded}
        className="p-4 bg-white"
      >
        <p>{props.content}</p>
      </div>
    </>
  );
}
