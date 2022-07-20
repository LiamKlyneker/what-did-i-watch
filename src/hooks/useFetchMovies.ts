import { useState } from "react";
import { Filters } from "src/types/filters";
import { Movie, MovieMeta } from "src/types/movie";

export default function useFetchMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [meta, setMeta] = useState<MovieMeta>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const performFetch = async (filters: Filters) => {
    setIsLoading(true);
    setError(null);
    filters.page === 1 && setMovies([]);
    try {
      const response = await fetch(
        `/api/omdb?${new URLSearchParams(
          filters as unknown as Record<string, string>
        )}`
      );
      const json = await response.json();
      const moviesToSet = json.Search || [];
      setMovies(filters.page === 1 ? moviesToSet : [...movies, ...moviesToSet]);
      setMeta({ totalResults: json.totalResults });
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { performFetch, movies, meta, isLoading, error };
}
