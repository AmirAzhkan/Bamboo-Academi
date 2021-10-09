import React, { useState, useEffect } from "react";
import _ from "lodash";

import Menu from "../../Components/Common/Menu/Menu";
import Search from "../../Components/Common/Search/Search";
import CoursesCard from "../../Components/Common/CoursesCard/CoursesCard";
import Pagination from "../../Components/Common/Pagination/Pagination";
import Footer from "../../Components/Common/Footer/Footer";
import ReactModal from "../../Components/Modal/ReactModal";
import SelectOption from "../../Components/SelectOption/SelectOption";
import Loading from "../../Components/Common/Loading/Loading";

import { Paginate } from "../../Core/Utils/Paginate";
import { GetTerm } from "../../Core/Services/Api/GetTerm.api";

import CoursesCss from "./Courses.module.css";
import "../../Assets/Fonts/Fonts.css";

const Courses = () => {
  const [terms, setTerms] = useState([]);
  const [term, setTerm] = useState({});
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [sortColumn, setSortColumn] = useState({ path: "_id", order: "desc" });
  const [searchQuery, setSearchQuery] = useState("");
  const [LoadingState, setLoadingState] = useState(true);

  const modalOpen = (_id) => {
    setShow(true);
    const term = terms.find((term) => term._id === _id);
    setTerm(term);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (window.innerWidth < 1281 && window.innerWidth > 961) {
      setPageSize(8);
    } else if (window.innerWidth < 961) {
      setPageSize(6);
    }
  });

  useEffect(async () => {
    try {
      const termz = await GetTerm();
      setTerms(termz.result);
      setCount(termz.result.length);
      setLoadingState(false);
    } catch (error) {}
  }, []);

  const handleSort = (path) => {
    path === "_id"
      ? setSortColumn({ path, order: "desc" })
      : setSortColumn({ path, order: "asc" });
  };

  const handleSearch = (query) => {
    setCurrentPage(1);
    setSearchQuery(query);
    setCount(allTerms.length);
  };

  let filtered = terms;
  if (searchQuery) {
    filtered = terms.filter((m) =>
      m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const allTerms = Paginate(sorted, currentPage, pageSize);

  return (
    <div className="container-fluid">
      {LoadingState ? (
        <Loading />
      ) : (
        <>
          {/*                                                           Row 1 : Header */}
          <div className="row" style={{ position: "relative", zIndex: "0" }}>
            <div className={`col-md-12 ${CoursesCss.header}`}>
              <div className={`${CoursesCss.headerHolder}`}>
                <Menu version="whiteMenu" selectMenuTab="coursesMenuTab" />
                <Search
                  version="searchArticles"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className={`${CoursesCss.headerMask}`}></div>
          </div>

          {/*                                                           Row 2 : Courses Content */}

          <div className={`row ${CoursesCss.content}`}>
            <div className={`col-md-11 px-0 ${CoursesCss.contentHolder}`}>
              <div className={`col-md-12 p-0 ${CoursesCss.titleHolder}`}>
                <h2 className={"lale"}>دوره های آموزشی</h2>
                <SelectOption onSort={handleSort} />
              </div>
              {filtered.length !== 0 ? (
                <>
                  <div className={`col-md-12 p-0 ${CoursesCss.cardsHolder}`}>
                    {allTerms.map((ter) => (
                      <CoursesCard
                        key={ter._id}
                        iid={ter._id}
                        cardHolderSize="coursesPage"
                        termId={ter._id}
                        imageSrc={ter.course.image}
                        title={ter.title}
                        teacher={ter.teacher.fullName}
                        capacity={ter.capacity}
                        price={ter.cost}
                        startDate={ter.startDate}
                        endDate={ter.endDate}
                        description={ter.course.description}
                        onClick={() => modalOpen(ter._id)}
                      />
                    ))}
                  </div>

                  <ReactModal show={show} setShow={setShow} term={term} />

                  <div className={`col-md-12 p-0 ${CoursesCss.paginatHolder}`}>
                    <Pagination
                      itemsCount={count}
                      pageSize={pageSize}
                      onPageChange={handlePageChange}
                      currentPage={currentPage}
                      activeStyle="coursesActive"
                      paginateSelfStyle="coursesPaginat"
                      nextPaginat="nextCoursesPaginat"
                      pervPaginat="pervCoursesPaginat"
                    />
                  </div>
                </>
              ) : (
                <p className={CoursesCss.coursesStatus}>
                  دوره ای برای نمایش وجود ندارد
                </p>
              )}
            </div>
          </div>

          {/*                                                           Row 3 : Footer */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Courses;
