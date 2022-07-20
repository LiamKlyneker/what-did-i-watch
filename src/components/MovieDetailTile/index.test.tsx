import { render, screen } from "@testing-library/react";
import { Movie } from "src/types/movie";
import MovieDetailTile from ".";

const fakeMovie: Movie = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
  Title: "How to Train Your Dragon",
  Type: "movie",
  Year: "2010",
  imdbID: "tt0892769",
  Plot: "A hare is trained to hunt dragons.",
};

describe("MovieDetailTile", () => {
  it("should render correctly", () => {
    render(<MovieDetailTile movie={fakeMovie} />);
    expect(screen.getByText("How to Train Your Dragon")).toBeInTheDocument();
  });
});
