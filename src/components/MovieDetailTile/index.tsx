import { Typography } from "#atoms";
import Image from "next/image";
import { Movie } from "src/types/movie";
import s from "./styles.module.css";

export interface MovieDetailTileProps {
  movie: Movie;
}

export default function MovieDetailTile(props: MovieDetailTileProps) {
  const { movie } = props;

  return (
    <section className={s.movieDetailTile}>
      <figure className={s.movieTilePoster}>
        {movie.Poster !== "N/A" && (
          <Image
            src={movie.Poster}
            alt="title"
            layout="fill"
            objectFit="contain"
          />
        )}
      </figure>
      <div className={s.movieInfo}>
        <Typography variant="h1">{movie.Title}</Typography>
        <Typography>
          {movie.Type} – {movie.Year}
        </Typography>
        <Typography>{movie.Plot}</Typography>
      </div>
    </section>
  );
}
