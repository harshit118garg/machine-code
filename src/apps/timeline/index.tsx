import Card from "./components/Card";
import LinearBar from "./components/linear-bar";
import "./styles/index.scss";
import { TIMELINE_DATA } from "./constants/timeline-constants";
import { useState } from "react";

export default function TimeLine() {
  const [cardId, setCardId] = useState<number>(1);

  const handleClick = (id: number) => setCardId(id);

  return (
    <>
      <div className="timeline-container">
        <div className="top-bar">
          <h2>TimeLine</h2>
        </div>
        <div className="wrapper">
          <div className="step-wrapper">
            <LinearBar data={TIMELINE_DATA} handleClick={handleClick} />
          </div>
          <div className="info-wrapper">
            {TIMELINE_DATA.map((data) => {
              return <Card key={data.id} cardData={data} id={cardId - 1} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
