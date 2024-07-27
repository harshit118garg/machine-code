import "./styles/index.scss";
import data from "./static/accordionData.json";
import { MoveDown, MoveUp } from "lucide-react";
import { useState } from "react";

interface AccordionDetails {
  id: number;
  title: string;
  details: string;
}

interface AccordionPanelProps {
  accordionInfo: AccordionDetails;
  isExpanded: boolean;
  onToggle: () => void;
}

interface AccordionPaneProps {
  details: string;
  expanded: boolean;
}

export default function AccordionComp({
  onePanelView = false,
}: {
  onePanelView?: boolean;
}) {
  const { accordionData } = data;
  const [expandedPanels, setExpandedPanels] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    if (onePanelView) {
      setExpandedPanels((prevExpandedPanels) =>
        prevExpandedPanels.includes(id)
          ? prevExpandedPanels.filter((panelId) => panelId !== id)
          : [...prevExpandedPanels, id]
      );
    } else {
      setExpandedPanels((prevExpandedPanels) =>
        prevExpandedPanels.includes(id) ? [] : [id]
      );
    }
  };

  return (
    <div className="accordion-container">
      {accordionData.map((accordionDetails: AccordionDetails) => {
        return (
          <Accordion
            key={accordionDetails.id}
            accordionInfo={accordionDetails}
            isExpanded={expandedPanels.includes(accordionDetails.id)}
            onToggle={() => handleToggle(accordionDetails.id)}
          />
        );
      })}
    </div>
  );
}

function Accordion({
  accordionInfo,
  isExpanded,
  onToggle,
}: AccordionPanelProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      onToggle();
    }
  };

  return (
    <>
      <div className="accordion-wrapper">
        <div
          className={`accordion-panel ${
            isExpanded ? "accordion-panel-expanded" : ""
          }`}
          role="button"
          tabIndex={0}
          onClick={onToggle}
          onKeyDown={handleKeyDown}
        >
          <h2>{accordionInfo.title}</h2>
          <span>{!isExpanded ? <MoveDown /> : <MoveUp />}</span>
        </div>
        <AccordionPane details={accordionInfo.details} expanded={isExpanded} />
      </div>
    </>
  );
}

function AccordionPane({ details, expanded }: AccordionPaneProps) {
  return (
    <>
      <div
        className={`accordion-pane ${
          expanded ? "accordion-pane-expanded" : ""
        } `}
      >
        <p>{details}</p>
      </div>
    </>
  );
}
