import { accordionContent } from "../../static/dummyContent.json";
import Accordion from "./components/Accordion";

export default function AccordionContainer() {
  return (
    <>
      <h2 className="text-white">Accordion</h2>
      <div className="wrapper p-4 rounded-xl">
        <div className="accordion-items p-2 flex flex-col gap-4">
          {accordionContent.map((item) => (
            <Accordion {...item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
