import { useState } from "react";
import { config } from "./definatios/constants";
import { BoxTypes } from "./definatios/types";
import "./styles/index.scss";

export default function GridLights() {
  const [order, setOrder] = useState<Number[]>([]);
  const [isDeactivating, setisDeactivating] = useState<boolean>(false);

  const activateBox = (idx: Number) => {
    const newOrder = [...order, idx];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateBox();
    }
  };

  const deactivateBox = () => {
    setisDeactivating(true);
    const timer = setInterval(() => {
      setOrder((prevOrder) => {
        const newOrder = prevOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setisDeactivating(false);
        }

        return newOrder;
      });
    }, 350);
  };

  return (
    <div className="grid-lights-container">
      <div className="instructions">
        <h2>Grid Lights</h2>
        <p>Click on the boxes in any order</p>
        <p>you will see the box color changes as you click on any box</p>
        <p>
          after all the boxes have been clicked, you will see the box gets
          reverted back to their origial color in the reverse order you clicked
          the boxes
        </p>
      </div>
      <div
        className="box-wrapper"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
          gridTemplateRows: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((val, idx) => {
          return val === 1 ? (
            <Box
              key={idx}
              label={`Box ${idx + 1}`}
              filled={order.includes(idx)}
              onClick={() => activateBox(idx)}
              isDisabled={order.includes(idx) || isDeactivating}
            />
          ) : (
            <span key={idx} />
          );
        })}
      </div>
    </div>
  );
}

function Box({ label, filled, onClick, isDisabled }: BoxTypes) {
  return (
    <button
      aria-label={label}
      className={filled ? "box box-activated" : "box"}
      onClick={onClick}
      disabled={isDisabled}
    />
  );
}
