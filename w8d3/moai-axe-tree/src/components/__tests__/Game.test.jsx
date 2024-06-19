import Game from "../Game";
import { render, fireEvent } from "@testing-library/react";

describe("Game Component Integration", () => {
  it("Once a player click on a choice, robot picks opposite and shows the computer win message", () => {
    const {
      queryByTestId,
      findByTestId,
      getByTestId,
      getByText,
      queryByText,
      findByText,
    } = render(<Game />);
    // query* => Will try fetch synchronously, and return undefined if they don't find the element
    // get* => Will try fetch synchronously, and throw an error if they don't find the element
    // find* => Will try fetch asynchronously, and throw an error if they don't find the element

    const playerMoaiButton = getByTestId("moai-statue");

    fireEvent.click(playerMoaiButton);

    const waitMessage = queryByText("Waiting for your choice!");

    return findByTestId("winMessage").then(() => {
      // const winMessage = getByTestId("winMessage");
      expect(waitMessage).not.toBeInTheDocument();
      // expect(winMessage).toBeInTheDocument();
    });

  });
  it("Once a player click on the robot to deactive cheating, then on a choice, robot picks randomly and shows the win message", () => {
    const { getByTestId, getByText, queryByText, findByTestId } = render(<Game />);
    // query* => Will try fetch synchronously, and return undefined if they don't find the element
    // get* => Will try fetch synchronously, and throw an error if they don't find the element
    // find* => Will try fetch asynchronously, and throw an error if they don't find the element

    const robot = getByText("🤖");
    fireEvent.click(robot);

    const playerMoaiButton = getByTestId("moai-statue");
    fireEvent.click(playerMoaiButton);

    const waitMessage = queryByText("Waiting for your choice!");
    
    return findByTestId("winMessage").then(() => {
      const winMessage = getByTestId("winMessage");
      expect(waitMessage).not.toBeInTheDocument();

      // expect(winMessage).toHaveTextContent(/(simple|Skynet|Player)/i)
      expect(winMessage).toHaveTextContent("Done!");
    });
  });
});
