import WordList from "./WordList";

export default function SuperCoolContainer({ children }) {
  return (
    <section>
      <h2>Im a super cool container</h2>
      👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
      ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
      {children}
      👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆
      ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
      ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
    </section>
  );
}
