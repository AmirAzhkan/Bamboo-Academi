import React, { useMemo, useState, useEffect } from "react";
import { GetCourses } from "../../../../Core/Services/Api/GetCourses.api";
import { GetCourseById } from "../../../../Core/Services/Api/GetCourseById.api";
import { DeleteCourse } from "../../../../Core/Services/Api/DeleteCourse.api";
import ReactTable from "../../../Common/ReactTable/ReactTable";
import EditCourseModal from "../../../Modal/EditCourseModal/EditCourseModal";
import Loading from "../../../Common/Loading/Loading";

import CoursesListCss from "./CoursesList.module.css";

const CoursesList = () => {
  const columns = useMemo(
    () => [
      {
        Header: "عنوان دوره",
        accessor: "courseName",
      },
      {
        Header: "سرفصل دوره",
        accessor: "topics[0]",
      },
    ],
    []
  );

  const [CoursesList, setCoursesList] = useState();
  const [CourseInfo, setCourseInfo] = useState([]);
  const [RefreshCoursesInfo, setRefreshCoursesInfo] = useState(false);
  const [LoadingState, setLoadingState] = useState(true);
  const [EditCourseModalShow, setEditCourseModalShow] = useState(false);

  useEffect(async () => {
    try {
      const data = await GetCourses();
      const coursesData = data.result;
      setCoursesList(coursesData);
      setLoadingState(false);
    } catch (error) {}
  }, [RefreshCoursesInfo]);

  //Editting The Course =>
  const handleEditCourse = async (courseId) => {
    try {
      setEditCourseModalShow(true);
      const course = await GetCourseById(courseId);
      setCourseInfo(course.result);
    } catch (error) {}
  };

  //Deleting The Course =>
  const handleDeleteCourse = async (courseId) => {
    const course = await DeleteCourse(courseId);

    setCoursesList((old) => {
      let newData = [...old];
      let newCoursesData = newData;
      newCoursesData = newCoursesData.filter((item) => item._id !== courseId);
      newData = newCoursesData;
      return newData;
    });
  };

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h4 className={CoursesListCss.titles}>لیست کل دوره ها :</h4>
          {CoursesList && CoursesList.length != 0 ? (
            <>
              <ReactTable
                columns={columns}
                data={CoursesList}
                selfStyle="coursesListTable"
                selfPaginate="coursesListPaginate"
                managementName="دوره"
              >
                {{
                  Body: ({ row: { original } }) => (
                    <td className={CoursesListCss.manageTd}>
                      <span
                        className={CoursesListCss.editCourse}
                        onClick={() => handleEditCourse(original._id)}
                      >
                        <div
                          className={`${CoursesListCss.tooltip} ${CoursesListCss.tooltipGreen}`}
                        >
                          ویرایش اطلاعات
                        </div>
                      </span>
                      <span
                        className={CoursesListCss.deleteCourse}
                        onClick={() => handleDeleteCourse(original._id)}
                      >
                        <div
                          className={`${CoursesListCss.tooltip} ${CoursesListCss.tooltipRed}`}
                        >
                          حذف دوره
                        </div>
                      </span>
                    </td>
                  ),
                }}
              </ReactTable>
              <EditCourseModal
                show={EditCourseModalShow}
                setShow={setEditCourseModalShow}
                courseInfo={CourseInfo}
                refreshCoursesInfo={setRefreshCoursesInfo}
              />
            </>
          ) : (
            <p className={CoursesListCss.coursesStatus}>
              دوره ای برای نمایش وجود ندارد
            </p>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default CoursesList;
