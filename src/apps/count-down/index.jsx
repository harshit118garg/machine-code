import React, { useState, useRef } from "react";
import "./style.css";

const initialConfig = {
  hh: {
    value: "",
    placeholder: "HH",
    factor: 60 * 60 * 1000,
  },
  mm: {
    value: "",
    placeholder: "MM",
    factor: 60 * 1000,
  },
  ss: {
    value: "",
    placeholder: "SS",
    factor: 1000,
  },
};

export default function Countdown() {
  const [config, setConfig] = useState(structuredClone(initialConfig));
  const [time, setTime] = useState(0);

  const timerRef = useRef(null);
  const timePassed = useRef(0);

  const handleChange = (configObjKey, index) => {
    return (e) => {
      const prevConfig = structuredClone(config);
      prevConfig[configObjKey].value = e.target.value;
      setConfig(prevConfig);
    };
  };

  const handlePlay = () => {
    console.log(config);

    let timeSpent = Object.keys(config).reduce((acc, curr) => {
      const { value, factor } = config[curr];

      if (value !== "" && !isNaN(Number(value))) {
        acc += Number(value) * factor;
      }

      return acc;
    }, 0);

    timePassed.current = Date.now() + timeSpent;

    timerRef.current = setInterval(() => {
      setTime(() => {
        return timePassed.current - Date.now();
      });
    }, 10);

    console.log(timeSpent);
  };
  const handlePause = () => {};
  const handleReset = () => {};

  const formatTime = () => {
    const hours = Math.floor(time / (60 * 60 * 1000));
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    if (seconds === 0 && minutes === 0 && hours === 0) return `time over`;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="timer-app">
      <div className="timer-countdown">
        {Object.keys(config).map((k, i) => {
          return (
            <div className="timer-input" key={i}>
              <input
                name={k}
                list={`${k}-datalist`}
                onChange={handleChange(k, i)}
                placeholder={config[k].placeholder}
                value={config[k].value}
              />
              <datalist id={`${k}-datalist`}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </datalist>
            </div>
          );
        })}
      </div>
      {formatTime()}
      <div className="timer-controls">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
