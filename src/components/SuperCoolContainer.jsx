import WordList from "./WordList";

export default function SuperCoolContainer({ word1, word2, word3 }) {
    return (
        <section>
            <h2>Im a super cool container</h2>
            👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
            ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
            <WordList word1={word1} word2={word2} word3={word3} />
            👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆
            ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
            ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
        </section>
    );
}
