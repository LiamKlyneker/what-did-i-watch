import { render, screen } from "@testing-library/react";
import Modal from ".";

describe("Modal", () => {
  it("should render correctly", () => {
    const handleOnClose = jest.fn();
    render(<Modal onClose={handleOnClose}>Content</Modal>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
