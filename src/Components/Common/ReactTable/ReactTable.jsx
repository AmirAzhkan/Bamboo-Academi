import React from "react";
import { useTable, usePagination } from "react-table";

import ReactTableCss from "./ReactTable.module.css";
import "../../../Assets/Fonts/Fonts.css";

const ReactTable = ({
  columns,
  data,
  managementName,
  selfStyle,
  selfPaginate,
  children: { Body },
}) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 4 },
    },
    usePagination
  );
  return (
    <React.Fragment>
      <table
        {...getTableProps()}
        style={{ width: "100%" }}
        className={`shab ${ReactTableCss.ReactTable} ${ReactTableCss[selfStyle]}`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th className={ReactTableCss.manageTh}>
                مدیریت {managementName}
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <Body row={row} />
              </tr>
            );
          })}
        </tbody>
      </table>
      {/*Pagination*/}
      <div
        className={`pagination mt-3 ${ReactTableCss.paginatHolder} ${ReactTableCss[selfPaginate]}`}
      >
        <div className={ReactTableCss.buttonHolder}>
          <button
            className={ReactTableCss.doublePerve}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          ></button>
          <button
            className={ReactTableCss.perve}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          ></button>
          <button
            className={ReactTableCss.next}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          ></button>
          <button
            className={ReactTableCss.doubleNext}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          ></button>
        </div>
        <div className={ReactTableCss.pageStatusHolder}>
          <span className="shab">
            صفحه
            <strong className="mx-2">
              {pageIndex + 1} از {pageOptions.length}
            </strong>
          </span>
        </div>
        <div className={ReactTableCss.capacityHolder}>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="shab"
          >
            {[4, 8, 16].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                ظرفیت صفحه {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReactTable;
