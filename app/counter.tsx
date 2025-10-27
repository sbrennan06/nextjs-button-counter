"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const decDisabled = count - step < 0;

  return (
    <>
      <section className="counter">
        <p aria-live="polite">Count: {count}</p>

        <label htmlFor="step">Step: </label>
        <input
          id="step"
          type="number"
          min={1}
          value={step}
          onChange={(e) => setStep(e.currentTarget.valueAsNumber || 1)}
        />

        <div className="counter-buttons">
          <button type="button" onClick={() => setCount(count + step)}>
            +{step}
          </button>
          <button
            type="button"
            onClick={() => setCount(Math.max(0, count - step))}
            disabled={decDisabled}
          >
            -{step}
          </button>
          <button type="button" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </section>
    </>
  );
}
