import Counter from "./counter";

export default function Page() {
  return (
    <main style={{ maxWidth: 720, margin: "2rem auto", padding: "1rem" }}>
      <h1>Button Counter</h1>
      <p>Click the button!</p>

      <Counter />
    </main>
  );
}
