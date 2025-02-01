import { Container } from "../../shared";
import { accordionContent } from "../../static/dummyContent.json";
import Accordion from "./components/Accordion";

export default function AccordionContainer() {
  return (
    <>
      <Container componentName="accordion">
        <div className="accordion-items p-2 flex flex-col gap-4">
          {accordionContent.map((item) => (
            <Accordion {...item} key={item.id} />
          ))}
        </div>
      </Container>
    </>
  );
}
