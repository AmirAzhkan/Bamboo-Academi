import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../../../Core/Services/AuthServices/AuthServices";
import { GetTerm } from "../../../Core/Services/Api/GetTerm.api";
import { DeleteStudentFromTerm } from "../../../Core/Services/Api/DeleteStudentFromTerm.api";
import { Paginate } from "../../../Core/Utils/Paginate";

import Table from "../../Common/Table/Table";
import Pagination from "../../Common/Pagination/Pagination";
import Loading from "../../Common/Loading/Loading";

import MyCoursesCss from "./PannelMyCourses.module.css";

function MyCourses() {
  const [termsList, setTermsList] = useState([]);
  const [LoadingState, setLoadingState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState();
  const [pageSize, setPageSize] = useState(4);

  useEffect(async () => {
    const studentInfo = getCurrentUser();
    const data = await GetTerm();

    //Filtering Terms List Base On User Id :: Return List Of Terms That User Get It & Set It Table
    const filteredData = data.result.filter((row) => {
      const isInTerm = row.students.some(
        (student) => student._id === studentInfo._id
      );
      if (isInTerm) return row;
    });

    const paginateData = Paginate(filteredData, currentPage, pageSize);
    const dataCount = filteredData.length;
    setCount(dataCount);
    setTermsList(paginateData);
    setLoadingState(false);
  }, [currentPage]);

  const deleteCourse = async (termId, termTitle) => {
    const term = await DeleteStudentFromTerm(termId, termTitle);

    setTermsList((old) => {
      let newData = [...old];
      let newTermsData = newData;
      newTermsData = newTermsData.filter((item) => item._id !== termId);
      newData = newTermsData;
      return newData;
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      id="v-pills-myCourses"
      role="tabpanel"
      aria-labelledby="v-pills-myCourses-tab"
    >
      {LoadingState ? (
        <Loading />
      ) : (
        <>
          <div className={MyCoursesCss.titleHolder}>
            <h4 className={MyCoursesCss.contentTitle}>دوره های من :</h4>
          </div>
          {termsList.length === 0 ? (
            <p className={MyCoursesCss.courseInfo}>
              دوره ی ثبت شده ای برای شما وجود ندارد
            </p>
          ) : (
            <React.Fragment>
              <div className={MyCoursesCss.tableHolder}>
                <Table
                  data={termsList}
                  handleCourse={deleteCourse}
                  buttonType="deleteButton"
                  tooltipType="tooltipDel"
                  tooltipText="حذف دوره"
                />
              </div>
              <div className={`mt-4 ${MyCoursesCss.paginatHolder}`}>
                <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                  activeStyle="pannelActive"
                  paginateSelfStyle="pannelPaginat"
                  nextPaginat="nextPannelPaginat"
                  pervPaginat="pervPannelPaginat"
                />
              </div>
            </React.Fragment>
          )}
        </>
      )}
    </div>
  );
}

export default MyCourses;
