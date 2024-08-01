import React, { useState } from "react";

export default function AccordionItem(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col w-1/2 gap-3 bg-orange-200 rounded-xl  p-3 hover:p-4 ">
      <button
        id={`accordion-button-${props.id}`}
        role="button"
        accordion-expanded={`${isExpanded}`}
        accordion-control={`accordion-content-${props.id}`}
        onClick={handleToggle}
        className="bg-slate-600 p-1 text-white rounded-lg"
      >
        {props.title}
      </button>
      <div
        id={`accordion-content-${props.id}`}
        role="region"
        accordion-labelledby={`accordion-button-${props.id}`}
        hidden={!isExpanded}
        className="m-4 p-4 bg-gray-300 rounded-lg"
      >
        <p>{props.content}</p>
      </div>
    </div>
  );
}
