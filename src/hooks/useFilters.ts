import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Filters } from "src/types/filters";

export default function useFilters() {
  const router = useRouter();
  const [filters, setFilters] = useState<Filters>({
    s: "",
    page: 1,
  });

  const setFilterValue = (name: string, value: string) => {
    const queryToSet = { ...router.query };
    !value && delete queryToSet[name];
    router.push({
      pathname: "/",
      query: {
        ...queryToSet,
        ...(value && { [name]: value }),
      },
    });
  };

  const updatePage = (page: number) => setFilters({ ...filters, page });

  useEffect(() => {
    setFilters({
      ...filters,
      ...(router.query as unknown as Filters),
      ...(router.query.s !== filters.s && { page: 1 }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return { filters, setFilterValue, updatePage };
}
