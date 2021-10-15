import React, { useState } from "react";

export default function ContextSection() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

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
        <label htmlFor="test-input">
          Escribe algo:
          <input
            id="test-input"
            name="test-input"
            value={text}
            onChange={(event) => setText(event.currentTarget.value)}
          />
        </label>
        <h3>{`${text} ${counter}`}</h3>
      </div>
    </div>
  );
}
