import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";

export default function Game(props) {
  return (
    <div>
      <main className="game">
        <Computer />
        <Player />
      </main>
      <Result />
    </div>
  );
}
