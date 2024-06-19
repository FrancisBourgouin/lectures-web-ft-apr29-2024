import { useState } from "react";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import {
  confirmTheWinner,
  pickOppositeChoice,
  pickRandomChoice,
} from "../helpers/gameHelpers";

export default function Game(props) {
  const [isCheating, setIsCheating] = useState(true);
  const toggleCheating = () => setIsCheating(!isCheating);

  const [winMessage, setWinMessage] = useState("");

  const play = (playerChoice) => {
    const computerChoice = isCheating
      ? pickOppositeChoice(playerChoice)
      : pickRandomChoice();

    const newWinMessage = confirmTheWinner(computerChoice, playerChoice);
    setTimeout(() => {
      setWinMessage(newWinMessage);
    }, 1000);
  };
  return (
    <div>
      <main className="game">
        <Computer isCheating={isCheating} toggleCheating={toggleCheating} />
        <Player play={play} />
      </main>
      <Result winMessage={winMessage} />
    </div>
  );
}
