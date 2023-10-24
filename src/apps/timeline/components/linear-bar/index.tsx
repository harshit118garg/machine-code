import { CircleDot } from "lucide-react";
import { Timeline_data_type } from "../../constants/timeline-types";
import "./styles/index.scss";
import { useState } from "react";

interface LinearbarProperties {
  data: Timeline_data_type[];
  handleClick: (id: number) => void;
}

export default function LinearBar({ data, handleClick }: LinearbarProperties) {
  const [selectedBtnId, setSelectedBtn] = useState<number>(1);

  const clickHandler = (id: number) => {
    handleClick(id);
    setSelectedBtn(id);
  };

  return (
    <>
      <div className="linear-btns">
        {data.map((d) => {
          return (
            <div key={d.id} className="btn-wrapper">
              <div className="line"></div>
              <div className="btn-box">
                <button
                  onClick={() => clickHandler(d.id)}
                  className={`${selectedBtnId === d.id ? "active" : ""}`}
                >
                  <CircleDot />
                </button>
                <p>{d.year}</p>
              </div>
              <div className="line"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
