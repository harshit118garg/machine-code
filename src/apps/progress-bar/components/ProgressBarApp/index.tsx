import { useEffect, useState } from "react";
import "./styles/index.scss";

interface Properties {
  value: number;
  onComplete: () => void;
}

export default function ProgressBarApp({ value = 0, onComplete }: Properties) {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));

    if (value >= 100) {
      onComplete();
    }
  }, [value]);

  return (
    <>
      <div className="wrapper">
        <div className="progress-bar">
          <div className="bar" style={{ width: `${percentage}%` }}>
            <span
              style={{ color: `${percentage < 49 ? "blue" : "black"}` }}
            >{`${percentage.toFixed()}%`}</span>
          </div>
        </div>
      </div>
    </>
  );
}
