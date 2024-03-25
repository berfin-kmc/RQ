import React from "react";
import { useQueries } from "@tanstack/react-query";
// import { fetchSuperHeroDetail } from "../hooks/useSuperheroData";
import axios from "axios";

// If the number of queries you need to execute is changing from render to render, you cannot use manual querying since that would violate the rules of hooks. Instead, TanStack Query provides a useQueries hook, which you can use to dynamically execute as many queries in parallel as you'd like.

async function fetchSuperHeroDetail(superheroID) {
  try {
    const resp = await axios.get(
      `http://localhost:4000/superheroes/${superheroID}`
    );
    return resp;
  } catch (err) { }
}

function DynamicParalelQueries({ heroIDs }) {
  const res = useQueries({
    queries: heroIDs.map((id) => {
      return {
        queryKey: ["superhero", id],
        queryFn: () => fetchSuperHeroDetail(id),
      };
    }),
  });

  console.log(res);

  return <div>DynamicParalelQueries</div>;
}

export default DynamicParalelQueries;
