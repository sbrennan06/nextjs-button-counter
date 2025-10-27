"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <p aria-live="polite">Count: {count}</p>;
}
