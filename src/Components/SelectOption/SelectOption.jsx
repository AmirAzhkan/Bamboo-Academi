import React from "react";

import soc from "./SelectOption.module.css";
// soc = select option css

const SelectOption = ({ onSort }) => {
  return (
    <select
      className={`rounded-0 shab ${soc.selectOption}`}
      aria-label="Default select example"
    >
      <option onClick={() => onSort("_id")} selected>
        جدیدترین
      </option>
      <option onClick={() => onSort("")} value="1">
        قدیمی ترین
      </option>
      <option onClick={() => onSort("title")} value="2">
        بر اساس عنوان
      </option>
      <option onClick={() => onSort("cost")} value="3">
        بر اساس قیمت
      </option>
      <option onClick={() => onSort("capacity")} value="4">
        بر اساس ظرفیت
      </option>
    </select>
  );
};

export default SelectOption;
