import Image from "next/image";
import Link from "next/link";
import s from "./styles.module.css";
import { Typography } from "#atoms";
import { Movie } from "src/types/movie";

export interface MovieTileProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieTile(props: MovieTileProps) {
  const {
    movie: { imdbID, Title, Poster, Year, Type },
    onClick,
  } = props;

  const handleOnClick = (
    ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (
      !ev.metaKey &&
      !ev.ctrlKey &&
      !["I", "BUTTON"].includes((ev.target as Element).nodeName)
    ) {
      ev.preventDefault();
      onClick();
    }
  };

  return (
    <Link href={`/movie/${imdbID}`}>
      <a className={s.movieTile} onClick={handleOnClick}>
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
    </Link>
  );
}
