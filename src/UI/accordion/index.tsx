import { Fragment } from "react/jsx-runtime";
import AccordionItem from "./components/AccordionItem";

export default function Accordion() {
  return (
    <>
      <h2>Accordion</h2>
      <div className="wrapper bg-green-300 p-4 rounded-xl">
        <div className="accordion-items p-2 flex flex-col gap-4">
          {[1, 2, 3, 4].map((item) => {
            return (
              <Fragment key={item}>
                <AccordionItem />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
