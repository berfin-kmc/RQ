import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export async function fetchColors({ page = 1 }) {
  try {
    const resp = await axios.get(`http://localhost:4000/colors?_page=${page}&_limit=10`);
    const data = resp.data
    return data;
  } catch (err) {
    console.log(err)
  }
}


export function useColorsInfiniteData() {
  return useInfiniteQuery({
    queryKey: ["colors"],
    queryFn: fetchColors,
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 7) { return pages.length }
      else {
        return undefined
      }
    }
  });
}
