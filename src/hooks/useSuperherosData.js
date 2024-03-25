import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export async function fetchSuperHeros({ queryKey }) {
  const  page = queryKey[1];
  try { 
    const res = await axios.get(`http://localhost:4000/superheroes?_limit=5&_page=${page}`);
    const data = res.data
    const totalPages = parseInt(res.headers["x-total-count"], 10)
    // onSuccess();
    return {data :data, totalPages: totalPages};
  } catch (err) {
    // onError();
  }
}

/* function onSuccess() {
  console.log("Perform side effect after data fetching");
}

function onError() {
  console.log("Perform side effect after encountering error");
} */

export function useSuperherosData(page = 1 ) {
  return useQuery({
    queryKey: ["superheros", page],
    queryFn: fetchSuperHeros,
    // default cacheTiem is 5 minute
    // staleTime: 30000, // refetch için ne kadar beklemeli?
    // default stale time is 0
    // default => refetchOnMount : true
    // default => refetchOnWindowFocus: true
    // refetchInterval: 2000 => This is called polling and very important
    // for continious data fetching when the data is being
    // updated often, like döviz kuru. It is by default stops
    // when window loses its focus
    // refetchIntervalInBackground : true
    //  enabled: false,
    // select: (data) => {
    //   const superheroNames = data?.data?.map(hero => hero.name)
    //   return superheroNames
    // } // you can also use to filter data!!!
  });
}
