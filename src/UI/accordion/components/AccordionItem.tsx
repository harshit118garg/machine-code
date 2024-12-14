import { useState } from "react";

export default function AccordionItem() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`accordion-item group ${
        isOpen ? "is-open" : "is-closed"
      } border rounded-md`}
    >
      <div
        className="accordion-pane hover:bg-slate-100 group-[.is-open]:bg-slate-100 transition-all duration-200 cursor-pointer p-4"
        role="button"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls="accordion-panel"
      >
        <h3 className="font-medium text-2xl">Title</h3>
      </div>
      <div
        id="accordion-panel"
        className={`accordion-panel overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 bg-slate-100 py-4" : "max-h-0 py-0"
        } px-4`}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, autem
          minus laboriosam voluptatibus dolores expedita quos ad quidem impedit
          inventore rem error delectus veritatis placeat officia magni eveniet
          quis perferendis ducimus. Similique dignissimos, ipsam quasi provident
          consequuntur id consectetur unde voluptate numquam aperiam quas rerum
          incidunt, cupiditate, a suscipit doloribus.
        </p>
      </div>
    </div>
  );
}
