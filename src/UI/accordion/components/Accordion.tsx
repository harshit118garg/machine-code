import { useState } from "react";
import { AccordionContent } from "../../../global/definations/types";
import { Headline, Icon, Image } from "../../../shared";

export default function Accordion(props: AccordionContent) {
  const { content, title, type } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const renderPanelContent = () => {
    switch (type) {
      case "text":
        return (
          <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
        );
      case "image":
        return (
          <div className="w-full aspect-w-16 aspect-h-9 image-wrapper">
            <Image
              alt={title}
              src={content}
              className="w-full h-full object-contain"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`accordion-item ${
        isOpen ? "is-open" : "is-closed"
      } bg-[#f8f5f2] border rounded-lg hover:shadow-xl transition-shadow duration-200`}
    >
      {/* pane */}
      <div
        className={`accordion-pane rounded-lg hover:bg-slate-100 transition-colors duration-200 cursor-pointer p-4 ${
          isOpen ? "shadow-lg" : ""
        } flex flex-row justify-between items-center`}
        role="button"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls="accordion-panel"
      >
        <Headline size={3} headlineText={title} />
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Icon name="arrow-down" className="w-6 h-6" />
        </span>
      </div>
      {/* panel */}
      <div
        id="accordion-panel"
        className={`accordion-panel overflow-hidden transition-[max-height,_padding] duration-200 ${
          isOpen ? "max-h-auto py-4" : "max-h-0 py-0"
        } px-4`}
      >
        {renderPanelContent()}
      </div>
    </div>
  );
}
