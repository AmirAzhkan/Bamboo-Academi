import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "داشبورد",
    to: "/adminPannel/dashboard",
    icon: "cil-home",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["مدیریت پروفایل"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "ویرایش اطلاعات",
    to: "/adminPannel/AdminTools/AdminEditProfile",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["مدیریت اعضا"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "بخش دانشجویان",
    route: "/adminPannel/StudentsManagement",
    icon: "cil-people",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "افزودن دانشجو",
        to: "/adminPannel/StudentsManagement/AddStudent",
      },
      {
        _tag: "CSidebarNavItem",
        name: "لیست کل دانشجویان",
        to: "/adminPannel/StudentsManagement/StudentsList",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "بخش کارمندان",
    route: "/adminPannel/EmployeeManagement",
    icon: "cil-people",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "لیست دیگر ادمین ها",
        to: "/adminPannel/EmployeeManagement/AdminsList",
      },
      {
        _tag: "CSidebarNavItem",
        name: "لیست کل اساتید",
        to: "/adminPannel/EmployeeManagement/TeachersList",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["مدیریت محتوا"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "ترم ها",
    route: "/adminPannel/TermsManagement",
    icon: "cil-ListRich",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "افزودن ترم",
        to: "/adminPannel/TermsManagement/AddTerm",
      },
      {
        _tag: "CSidebarNavItem",
        name: "لیست کل ترم ها",
        to: "/adminPannel/TermsManagement/TermsList",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "دوره ها",
    route: "/adminPannel/CoursesManagement",
    icon: "cil-Layers",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "افزودن دوره",
        to: "/adminPannel/CoursesManagement/AddCourse",
      },
      {
        _tag: "CSidebarNavItem",
        name: "لیست کل دوره ها",
        to: "/adminPannel/CoursesManagement/CoursesList",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "مقالات",
    route: "/adminPannel/ArticlesManagement",
    icon: "cil-notes",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "افزودن مقاله",
        to: "/adminPannel/ArticlesManagement/AddArticle",
      },
      {
        _tag: "CSidebarNavItem",
        name: "لیست کل مقالات",
        to: "/adminPannel/ArticlesManagement/ArticlesList",
      },
      {
        _tag: "CSidebarNavItem",
        name: "لیست کل اخبار",
        to: "/adminPannel/ArticlesManagement/NewsList",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "کامنت ها",
    to: "/adminPannel/CommentsManagement",
    icon: "cil-CommentSquare",
  },
];

export default _nav;
