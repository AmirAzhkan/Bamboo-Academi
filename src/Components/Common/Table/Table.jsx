import React from "react";

import TableCss from "./Table.module.css";

export const Table = (props) => {
  const { buttonType, tooltipType, tooltipText, data, handleCourse } = props;

  return (
    // Some Info :::
    // When We Conect To Backend DataBase One Block Of "tr" In "tbody" Should Be Mapped.
    // And The Value Of "td"s like Image And Texts Should Be Propsed .
    // And These Propses Should Be Valued In StudentPannel.jsx

    <table class="table shab">
      <thead>
        <tr>
          <th scope="col">عکس</th>
          <th scope="col">نام دوره</th>
          <th scope="col">مدرس</th>
          <th scope="col" className={TableCss.capacity}>
            ظرفیت
          </th>
          <th scope="col" className={TableCss.startDate}>
            تاریخ شروع
          </th>
          <th scope="col">قیمت</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((tableRow) => (
          <tr>
            <th scope="row">
              <div className={TableCss.courseImgHolder}>
                <img src={tableRow.course.image} alt="عکس دوره" />
              </div>
            </th>
            <td>{tableRow.title}</td>
            <td>{tableRow.teacher.fullName}</td>
            <td className={TableCss.capacity}>{tableRow.capacity} نفر</td>
            <td className={TableCss.startDate}>
              {tableRow.startDate.split("T")[0]}
            </td>
            <td>{tableRow.cost}</td>
            <td
              className={`${TableCss.manageTd} ${TableCss[buttonType]}`}
              onClick={() => handleCourse(tableRow._id, tableRow.title)}
            >
              <div className={`${TableCss.tooltip} ${TableCss[tooltipType]}`}>
                {tooltipText}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
