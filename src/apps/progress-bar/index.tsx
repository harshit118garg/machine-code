import { useEffect, useState } from "react";
import ProgressBarApp from "./components/ProgressBarApp";
import "./styles/index.scss";

export default function ProgressBar() {
  const [barValue, setBarValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setInterval(() => {
      setBarValue((val) => val + 1);
    }, 100);
  }, []);

  const handleComplete = () => setLoading(false);

  return (
    <>
      <div className="progress-bar-container">
        <div className="top-bar">
          <h2>Progress Bar</h2>
        </div>
        <ProgressBarApp value={barValue} onComplete={handleComplete} />
        {loading && <h2>Loading.....</h2>}
      </div>
    </>
  );
}
