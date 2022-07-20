import { render, screen } from "@testing-library/react";
import ButtonIcon from ".";

describe("ButtonIcon", () => {
  it("should render correctly", () => {
    render(<ButtonIcon icon="clear" />);
    expect(screen.getByText("clear")).toBeInTheDocument();
  });

  it("should trigger onClick", () => {
    const onClick = jest.fn();
    render(<ButtonIcon icon="clear" onClick={onClick} />);
    screen.getByText("clear").click();
    expect(onClick).toHaveBeenCalled();
  });
});
