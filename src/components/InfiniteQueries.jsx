
import React from "react";
import { useColorsInfiniteData } from "../hooks/useColorInfiniteData";

import Loader from "./Loader";
import Error from "./Error";

function InfiniteQueries() {

  const { data, fetchNextPage, error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading, isError, isSuccess } =
    useColorsInfiniteData();

const colorElements = data?.pages.map((group, i) => {
  return (
    <React.Fragment key={i}>
      {group?.map(color => ( 
        <div key={color.id} style={{ backgroundColor: color.hexCode }}>
          {color.hexCode}
        </div>
      ))}
    </React.Fragment>
  );
});


  return (
    <div>
      {isLoading || isFetching ? (
        <Loader />
      ) : isSuccess ? (
        <>
          <h2>Infinite Colors</h2>
          {colorElements}
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
                ? 'Load More Color'
                : 'Nothing more to load'}
          </button>        </>
      ) : isError ? (
        <Error message={error.message} />
      ) : null}
    </div>
  );


}

export default InfiniteQueries

