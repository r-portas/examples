import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders title", () => {
    render(<App />);
    expect(screen.getByText("rsbuild + vitest")).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<App />);
    expect(
      screen.getByText("Example that configures rsbuild and vitest"),
    ).toBeInTheDocument();
  });
});
