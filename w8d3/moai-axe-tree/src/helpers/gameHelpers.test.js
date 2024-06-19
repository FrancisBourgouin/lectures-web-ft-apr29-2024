import { pickOppositeChoice, pickRandomChoice } from "./gameHelpers";

describe("pickOppositeChoice", () => {
  it("what if the input is not moai or axe or tree", () => {
    // Testing Steps
    const expectedErrorMessage = "WHY YOU NO CHOOSE ONE OF THE RIGHT ONES!";
    const throwyFunctionCall = () => pickOppositeChoice("🦜");

    expect(throwyFunctionCall).toThrow(expectedErrorMessage);
  });
  it("what if there was no input", () => {
    // Testing Steps
    const expectedErrorMessage = "WHY YOU NO CHOOSE ONE OF THE RIGHT ONES!";
    const throwyFunctionCall = () => pickOppositeChoice("🦜");

    expect(throwyFunctionCall).toThrow(expectedErrorMessage);
  });
  it("check if the output is the good one", () => {
    // Testing Steps
    const validChoices = ["🗿", "🪓", "🌳"];
    const goodPairs = [
      { computer: "🌳", player: "🗿" },
      { computer: "🪓", player: "🌳" },
      { computer: "🗿", player: "🪓" },
    ];

    for (const pair of goodPairs) {
      const generatedChoice = pickOppositeChoice(pair.player);
      expect(generatedChoice).toEqual(pair.computer);
    }
  });
});
describe("pickRandomChoice", () => {
  it("check that the output is part of the list of choices (RANDOM ALERT!)", () => {
    const goodPairs = [
      { seed: 0.123, result: "🪓" },
      { seed: 0.1234, result: "🌳" },
      { seed: 0.1234567, result: "🗿" },
    ];

    for (const pair of goodPairs) {
      const generatedChoice = pickRandomChoice(pair.seed);
      expect(generatedChoice).toEqual(pair.result);
    }
  });
});
describe("confirmTheWinner", () => {
  xit("what if the input is not moai or axe or tree", () => {
    // Testing Steps
  });
  xit("missing an input", () => {
    // Testing Steps
  });
  xit("check if the output is the good one", () => {
    // Testing Steps
  });
});
