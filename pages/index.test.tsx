import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: { s: "" },
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("HomePage", () => {
  it("should render correctly", () => {
    render(<HomePage />);
    expect(
      screen.getByPlaceholderText("Which movie/serie you just watched?")
    ).toBeInTheDocument();
  });
});
