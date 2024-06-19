export const pickOppositeChoice = (playerChoice) => {
  const choices = ["🗿", "🌳", "🪓"];

  if (!choices.includes(playerChoice)) {
    throw new Error("WHY YOU NO CHOOSE ONE OF THE RIGHT ONES!");
  }

  // const computerChoices = {
  //   "🗿": "🌳",
  //   "🌳": "🪓",
  //   "🪓": "🗿",
  // };

  // return computerChoices[playerChoice]

  return choices[(choices.indexOf(playerChoice) + 1) % choices.length];
};

export const pickRandomChoice = (seed = Math.random()) => {
  const choices = ["🗿", "🌳", "🪓"];
  const properRandomIndexKinda =
    Math.floor(Math.sqrt(seed * 128736 + 50) * 12234) % choices.length;

  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[properRandomIndexKinda];
};

export const confirmTheWinner = (computerChoice, playerChoice) => {
  const pairings = {
    "🗿": "🌳",
    "🌳": "🪓",
    "🪓": "🗿",
  };

  if(computerChoice === playerChoice){
    return "Done! A simple one or a Windsor?"
  }

  if(pairings[playerChoice] === computerChoice){
    return "Done! Skynet has risen!"
  }

  return "Done! Player wins! :D"
};
