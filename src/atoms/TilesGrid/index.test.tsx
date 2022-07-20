import { render, screen } from "@testing-library/react";
import TilesGrid from ".";

describe("TilesGrid", () => {
  it("should render correctly", () => {
    render(<TilesGrid>Content</TilesGrid>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
