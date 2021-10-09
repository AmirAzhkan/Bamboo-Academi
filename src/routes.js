import React from "react";

const Dashboard = React.lazy(() =>
  import("./Components/AdminPannel/dashboard/Dashboard")
);
const CoreUIIcons = React.lazy(() =>
  import("./Views/Others(CoreUI)/icons/coreui-icons/CoreUIIcons")
);

const AdminEditProfile = React.lazy(() =>
  import("./Components/AdminPannel/AdminTools/AdminEditProfile")
);

const StudentsList = React.lazy(() =>
  import(
    "./Components/AdminPannel/StudentsManagement/StudentsList/StudentsList"
  )
);
const AddStudent = React.lazy(() =>
  import("./Components/AdminPannel/StudentsManagement/AddStudent/AddStudent")
);
const AdminsList = React.lazy(() =>
  import("./Components/AdminPannel/EmployeeManagement/AdminsList/AdminsList")
);
const TeachersList = React.lazy(() =>
  import(
    "./Components/AdminPannel/EmployeeManagement/TeachersList/TeachersList"
  )
);
const TermsList = React.lazy(() =>
  import("./Components/AdminPannel/TermsManagement/TermsList/TermsList")
);
const AddTerm = React.lazy(() =>
  import("./Components/AdminPannel/TermsManagement/AddTerm/AddTerm")
);
const CoursesList = React.lazy(() =>
  import("./Components/AdminPannel/CoursesManagement/CoursesList/CoursesList")
);
const AddCourse = React.lazy(() =>
  import("./Components/AdminPannel/CoursesManagement/AddCourse/AddCourse")
);
const ArticlesList = React.lazy(() =>
  import(
    "./Components/AdminPannel/ArticlesManagement/ArticlesList/ArticlesList"
  )
);
const AddArticle = React.lazy(() =>
  import("./Components/AdminPannel/ArticlesManagement/AddArticle/AddArticle")
);

const NewsList = React.lazy(() =>
  import("./Components/AdminPannel/ArticlesManagement/NewsList/NewsList")
);

const CommentsList = React.lazy(() =>
  import("./Components/AdminPannel/CommentsManagement/CommentsList")
);

const routes = [
  { path: "/adminPannel", exact: true, name: "پنل ادمین" },
  { path: "/adminPannel/dashboard", name: "داشبورد", component: Dashboard },
  {
    path: "/adminPannel/AdminTools",
    name: "امکانات ادمین",
    component: AdminEditProfile,
    exact: true,
  },
  {
    path: "/adminPannel/AdminTools/AdminEditProfile",
    name: "ویرایش اطلاعات ادمین",
    component: AdminEditProfile,
  },
  {
    path: "/adminPannel/StudentsManagement",
    name: "مدیریت دانشجویان",
    component: AddStudent,
    exact: true,
  },
  {
    path: "/adminPannel/StudentsManagement/AddStudent",
    name: "افزودن دانشجو",
    component: AddStudent,
  },
  {
    path: "/adminPannel/StudentsManagement/StudentsList",
    name: "لیست کل دانشجویان",
    component: StudentsList,
  },
  {
    path: "/adminPannel/EmployeeManagement",
    name: "مدیریت کارمندان",
    component: TeachersList,
    exact: true,
  },
  {
    path: "/adminPannel/EmployeeManagement/AdminsList",
    name: "لیست دیگر ادمین ها",
    component: AdminsList,
  },
  {
    path: "/adminPannel/EmployeeManagement/TeachersList",
    name: "لیست کل اساتید",
    component: TeachersList,
  },
  {
    path: "/adminPannel/TermsManagement",
    name: "مدیریت ترم ها",
    component: AddTerm,
    exact: true,
  },
  {
    path: "/adminPannel/TermsManagement/AddTerm",
    name: "افزودن ترم",
    component: AddTerm,
  },
  {
    path: "/adminPannel/TermsManagement/TermsList",
    name: "لیست کل ترم ها",
    component: TermsList,
  },
  {
    path: "/adminPannel/CoursesManagement",
    name: "مدیریت دوره ها",
    component: AddCourse,
    exact: true,
  },
  {
    path: "/adminPannel/CoursesManagement/AddCourse",
    name: "افزودن دوره",
    component: AddCourse,
  },
  {
    path: "/adminPannel/CoursesManagement/CoursesList",
    name: "لیست کل دوره ها",
    component: CoursesList,
  },
  {
    path: "/adminPannel/ArticlesManagement",
    name: "مدیریت مقالات",
    component: AddArticle,
    exact: true,
  },
  {
    path: "/adminPannel/ArticlesManagement/AddArticle",
    name: "افزودن مقاله",
    component: AddArticle,
  },
  {
    path: "/adminPannel/ArticlesManagement/ArticlesList",
    name: "لیست کل مقالات",
    component: ArticlesList,
  },

  {
    path: "/adminPannel/ArticlesManagement/NewsList",
    name: "لیست کل اخبار",
    component: NewsList,
  },

  {
    path: "/adminPannel/CommentsManagement",
    name: "لیست کل کامنت ها",
    component: CommentsList,
  },

  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
];

export default routes;
