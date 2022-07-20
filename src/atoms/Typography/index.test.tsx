import { render, screen } from "@testing-library/react";
import Typography from ".";

describe("Typography", () => {
  it("element should be a p tag", () => {
    render(<Typography>Content</Typography>);
    expect(screen.getByText("Content")).toContainHTML(
      "<p class='p'>Content</p>"
    );
  });

  it("element should be a h1 tag", () => {
    render(<Typography variant="h1">Content</Typography>);
    expect(screen.getByText("Content")).toContainHTML(
      "<h1 class='h1'>Content</h1>"
    );
  });

  it("element should be a h3 tag", () => {
    render(<Typography variant="h3">Content</Typography>);
    expect(screen.getByText("Content")).toContainHTML(
      "<h3 class='h3'>Content</h3>"
    );
  });
});
