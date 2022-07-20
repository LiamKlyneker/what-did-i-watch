export interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  Plot?: string;
}

export interface MovieMeta {
  totalResults: number;
}
