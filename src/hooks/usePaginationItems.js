import Pagination from "react-bootstrap/Pagination";


export const usePaginationItems = (totalPages, pageNum, setPageNum) => {
  const items = [];
  const changePage = (number) => setPageNum(number.toString());

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === Number(pageNum)}
        onClick={() => changePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return items
};
