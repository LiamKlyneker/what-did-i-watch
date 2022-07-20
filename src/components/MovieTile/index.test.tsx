import { render, screen } from "@testing-library/react";
import { Movie } from "src/types/movie";
import MovieTile from ".";

const fakeMovie: Movie = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
  Title: "How to Train Your Dragon",
  Type: "movie",
  Year: "2010",
  imdbID: "tt0892769",
};

describe("MovieTile", () => {
  it("should render correctly", () => {
    render(<MovieTile movie={fakeMovie} onClick={jest.fn()} />);
    expect(screen.getByText("How to Train Your Dragon")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const handleOnClick = jest.fn();
    render(<MovieTile movie={fakeMovie} onClick={handleOnClick} />);
    screen.getByText("How to Train Your Dragon").click();
    expect(handleOnClick).toHaveBeenCalled();
  });
});
