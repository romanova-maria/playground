import {
  describe,
  it,
  screen,
  expect,
  renderRoute,
  userEvent,
  axe,
} from "../../test-setup/testUtils";

describe("Clicks Game", () => {
  it("has a question and 0 current points from the beginning", async () => {
    renderRoute("/");

    const question = screen.getByText(
      "How many clicks can you do per two seconds?",
    );
    expect(question).toBeInTheDocument();

    const currentPoints = screen.getByTestId("current-points");
    expect(currentPoints).toBeInTheDocument();
    expect(currentPoints.innerHTML).toBe("0");
  });

  it("has Click button", () => {
    renderRoute("/");

    const clickBtn = screen.getByRole("button", { name: "Click me" });
    expect(clickBtn).toBeInTheDocument();
  });

  it("change current points when button was clicked", async () => {
    const user = userEvent.setup();
    renderRoute("/");

    const clickBtn = screen.getByRole("button", { name: "Click me" });
    await user.click(clickBtn);
    await user.click(clickBtn);

    const currentPoints = screen.getByTestId("current-points");
    expect(currentPoints.innerHTML).toBe("2");
  });

  it("should have no accessibility violations", async () => {
    const { container } = renderRoute("/");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
