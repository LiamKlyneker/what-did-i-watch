import Image from "next/image";
import s from "./styles.module.css";
import { Typography } from "#atoms";
import { Movie } from "src/types/movie";

export interface MovieTileProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieTile(props: MovieTileProps) {
  const {
    movie: { Title, Poster, Year, Type },
  } = props;

  return (
    <a className={s.movieTile}>
      <figure className={s.movieTilePoster}>
        {Poster !== "N/A" && (
          <Image src={Poster} alt="title" layout="fill" objectFit="contain" />
        )}
      </figure>
      <div className={s.movieTileInfo}>
        <Typography variant="h3">{Title}</Typography>
        <Typography>
          {Type} – {Year}
        </Typography>
      </div>
    </a>
  );
}
