import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should trigger onClick", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);
    screen.getByText("Click Me").click();
    expect(onClick).toHaveBeenCalled();
  });
});
