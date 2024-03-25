import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchSuperHeros } from "../hooks/useSuperherosData";

async function getFriends() {
  const resp = await axios.get("http://localhost:4000/users");
  return resp;
}

// When the number of parallel queries does not change, there is no extra effort to use parallel queries. Just use any number of TanStack Query's useQuery and useInfiniteQuery hooks side-by-side!

function ParalelQueries() {
  const { data: friends } = useQuery({
    queryKey: ["friends"],
    queryFn: getFriends,
  });

  const { data: superheros } = useQuery({
    queryKey: ["superheros"],
    queryFn: fetchSuperHeros,
  });

console.log(superheros?.data, friends?.data)

// console.log(superheros.data , friends.data)

  return <div>ParalelQueries</div>;
}

export default ParalelQueries;
