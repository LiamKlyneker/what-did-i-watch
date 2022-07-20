import { render, screen } from "@testing-library/react";
import DataStatusArea from ".";

describe("DataStatusArea", () => {
  it("should render correctly", () => {
    render(<DataStatusArea>Content</DataStatusArea>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
