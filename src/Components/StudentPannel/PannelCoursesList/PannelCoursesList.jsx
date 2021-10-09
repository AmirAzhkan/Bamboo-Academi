import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../../../Core/Services/AuthServices/AuthServices";
import { GetTerm } from "../../../Core/Services/Api/GetTerm.api";
import { AddStudentToTerm } from "../../../Core/Services/Api/AddStudentToTerm.api";
import { Paginate } from "../../../Core/Utils/Paginate";

import Table from "../../Common/Table/Table";
import Pagination from "../../Common/Pagination/Pagination";
import Loading from "../../Common/Loading/Loading";

import CoursesListCss from "./PannelCoursesList.module.css";

function CoursesList() {
  const [termsList, setTermsList] = useState([]);
  const [LoadingState, setLoadingState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState();
  const [pageSize, setPageSize] = useState(4);

  useEffect(async () => {
    const studentInfo = getCurrentUser();
    const data = await GetTerm();

    //Filtering Terms List Base On User Id :: Return List Of Terms That User Doesnt Get It & Set It Table
    const filteredData = data.result.filter((row) => {
      const isInTerm = row.students.some(
        (student) => student._id === studentInfo._id
      );
      if (!isInTerm) return row;
    });

    const paginateData = Paginate(filteredData, currentPage, pageSize);
    const dataCount = filteredData.length;
    setCount(dataCount);
    setTermsList(paginateData);
    setLoadingState(false);
  }, [currentPage]);

  const addCourse = async (termId, termTitle) => {
    const term = await AddStudentToTerm(termId, termTitle);

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
      id="v-pills-courses"
      role="tabpanel"
      aria-labelledby="v-pills-courses-tab"
    >
      {LoadingState ? (
        <Loading />
      ) : (
        <>
          <div className={CoursesListCss.titleHolder}>
            <h4 className={CoursesListCss.contentTitle}>لیست دوره ها :</h4>
          </div>
          {termsList.length === 0 ? (
            <p className={CoursesListCss.courseInfo}>
              دوره ای برای نمایش وجود ندارد
            </p>
          ) : (
            <React.Fragment>
              <div className={CoursesListCss.tableHolder}>
                <Table
                  data={termsList}
                  handleCourse={addCourse}
                  buttonType="addButton"
                  tooltipType="tooltipAdd"
                  tooltipText="افزودن دوره"
                />
              </div>
              <div className={`mt-4 ${CoursesListCss.paginatHolder}`}>
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

export default CoursesList;
