import { fireEvent, render, screen } from "@testing-library/react";
import { Movie } from "src/types/movie";
import SearchInput from ".";

describe("SearchInput", () => {
  it("should render correctly", () => {
    render(
      <SearchInput
        name="searc-input"
        onChange={jest.fn()}
        placeholder="Write something nice"
      />
    );
    expect(
      screen.getByPlaceholderText("Write something nice")
    ).toBeInTheDocument();
  });

  it("should call onChange on type", () => {
    const handleOnChange = jest.fn();
    render(
      <SearchInput
        name="searc-input"
        onChange={handleOnChange}
        placeholder="Write something nice"
      />
    );
    const input = screen.getByPlaceholderText("Write something nice");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleOnChange).toHaveBeenCalled();
  });
});
