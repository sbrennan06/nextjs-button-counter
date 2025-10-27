"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <section className="counter">
        <p aria-live="polite">Count: {count}</p>
        <div className="counter-buttons">
          <button type="button" onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button
            type="button"
            onClick={() => setCount(Math.max(0, count - 1))}
            disabled={count - 1 < 0}
          >
            -1
          </button>
          <button type="button" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </section>
    </>
  );
}
