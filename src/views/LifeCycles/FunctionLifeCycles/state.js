import React, { useState } from "react";

export default function ContextSection() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex-center flex-column">
      <h3>useSate</h3>
      <div className="flex-center flex-column">
        <span>{counter}</span>
        <div>
          <button
            className="app-button"
            onClick={() => setCounter(counter - 1)}
          >
            -
          </button>
          <button
            className="app-button"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
