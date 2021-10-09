import React from "react";
import _ from "lodash";

import PaginateCss from "./Pagination.module.css";
import "./Pagination.css";

export const Pagination = (props) => {
  const {
    activeStyle,
    paginateSelfStyle,
    nextPaginat,
    pervPaginat,
    itemsCount,
    pageSize,
    onPageChange,
    currentPage,
  } = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className={`pagination ${activeStyle} justify-content-center m-0 p-0`}>
      <li className="page-item">
        <a
          className={`page-link rounded-0  ${PaginateCss.paginatItem} ${[
            paginateSelfStyle,
          ]} ${[nextPaginat]}`}
        ></a>
      </li>
      {pages.map((page) => (
        <li
          onClick={scrollToTop}
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a
            onClick={() => onPageChange(page)}
            className={`page-link ${PaginateCss.paginatItem} ${[
              paginateSelfStyle,
            ]}`}
          >
            {page}
          </a>
        </li>
      ))}

      <li className="page-item">
        <a
          className={`page-link rounded-0  ${PaginateCss.paginatItem} ${[
            paginateSelfStyle,
          ]} ${[pervPaginat]}`}
          tabindex="-1"
          aria-disabled="true"
        ></a>
      </li>
    </ul>
  );
};

export default Pagination;
