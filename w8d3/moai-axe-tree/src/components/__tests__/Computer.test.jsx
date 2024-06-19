import Computer from "../Computer";
import { fireEvent, render } from "@testing-library/react";

describe("Computer Component Behavior", () => {
  it("should have the class 'cheating' when the prop isCheating is provided", () => {
    const { queryByText } = render(<Computer isCheating />);

    const computerSpan = queryByText("🤖");

    expect(computerSpan).toHaveClass("cheating");
  });

  it("should not have the class 'cheating' when the prop isCheating is missing", () => {
    const { queryByText } = render(<Computer />);

    const computerSpan = queryByText("🤖");

    expect(computerSpan).not.toHaveClass("cheating");
  });

  it("should do an action when we click on the robot face", () => {
    const fakeToggle = jest.fn()
    const { queryByText } = render(<Computer toggleCheating={fakeToggle} />);

    const computerSpan = queryByText("🤖");

    fireEvent.click(computerSpan)

    expect(fakeToggle).toHaveBeenCalled()
  });
});
