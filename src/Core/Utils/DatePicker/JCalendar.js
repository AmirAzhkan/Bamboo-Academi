import React, { useState, useEffect } from "react";
import moment from "moment-jalaali";
import _ from "lodash";
import { MdToday } from "react-icons/md";
import "./DatePicker.css";

const cd = Array(35).fill(<li> </li>);
const jm = "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split(
  "_"
);

export default function JCalendar({ changeSaveDate }) {
  moment().local("fa");
  const [today, setToday] = useState("");
  const [selectYear, setSelectYear] = useState(moment().format("jYYYY"));
  const [selectMonth, setSelectMonth] = useState(moment().format("jM"));
  const [selectDay, setSelectDay] = useState(moment().format("jD"));
  const [daysInMonth, setDaysInMonth] = useState(0);

  const updateDays = () => {
    cd.fill(<li className="li-empty">&nbsp;</li>);
    _.range(0, daysInMonth).forEach((d) => {
      cd[d] =
        d + 1 === Number(selectDay) ? (
          <li className="li-calendar li-current">{d + 1}</li>
        ) : (
          <li
            className="li-calendar li-pointer"
            onClick={() => handleSelectDay(d + 1)}
          >
            {d + 1}
          </li>
        );
    });
  };

  useEffect(() => {
    const newDate = `${selectYear}/${selectMonth}/${selectDay}`;
    const m = moment(newDate);
    setDaysInMonth(Number(m.format("M")) < 7 ? 31 : 30);
    setToday(m.format("YYYY/MM/DD"));
    changeSaveDate(m.format("YYYY/MM/DD"));
    updateDays();
  }, [selectYear, selectMonth]);

  useEffect(() => {
    const newDate = `${selectYear}/${
      selectMonth < 10 ? `0${selectMonth}` : selectMonth
    }/${selectDay < 10 ? `0${selectDay}` : selectDay}`;
    setToday(newDate);
    changeSaveDate(newDate);
  }, [selectDay]);

  updateDays();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "j_year") setSelectYear(value);
    else setSelectMonth(value);
    setSelectDay(1);
  };

  const handleSelectDay = (day) => {
    setSelectDay(day);
  };

  const handleToday = () => {
    const m = moment();
    setSelectDay(m.format("jD"));
    setSelectMonth(m.format("jM"));
    setSelectYear(m.format("jYYYY"));
  };

  return (
    <div>
      <ul className="justify-content-between datePickerUl">
        <li className="datePickerLi">
          <select
            className="form-select"
            name="j_year"
            value={selectYear}
            onChange={handleChange}
          >
            {_.range(moment().format("jYYYY"), 1320).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </li>
        <li className="datePickerLi">
          <select
            className="form-select"
            name="j_month"
            value={selectMonth}
            onChange={handleChange}
          >
            {_.range(0, 12).map((m) => {
              return (
                <option key={m} value={m + 1}>
                  {m + 1} ( {jm[m]} )
                </option>
              );
            })}
          </select>
        </li>
      </ul>
      <div>
        <ul className="d-flex justify-content-center datePickerUl">
          <li className="plain w-100 datePickerLi">
            <input
              className="form-control text-center fw-bold"
              value={today}
              readOnly
            />
          </li>
        </ul>
      </div>
      <div>
        <ul className="datePickerUl">
          {cd[0]}
          {cd[1]}
          {cd[2]}
          {cd[3]}
          {cd[4]}
          {cd[5]}
          {cd[6]}
        </ul>

        <ul className="datePickerUl">
          {cd[7]}
          {cd[8]}
          {cd[9]}
          {cd[10]}
          {cd[11]}
          {cd[12]}
          {cd[13]}
        </ul>

        <ul className="datePickerUl">
          {cd[14]}
          {cd[15]}
          {cd[16]}
          {cd[17]}
          {cd[18]}
          {cd[19]}
          {cd[20]}
        </ul>

        <ul className="datePickerUl">
          {cd[21]}
          {cd[22]}
          {cd[23]}
          {cd[24]}
          {cd[25]}
          {cd[26]}
          {cd[27]}
        </ul>

        <ul className="datePickerUl">
          {cd[28]}
          {cd[29]}
          {cd[30]}
          {cd[31]}
          {cd[32]}
          {cd[33]}
          <li
            className="li-calendar li-btnToday datePickerLi"
            onClick={handleToday}
          >
            <MdToday size="1.5rem" />
          </li>
        </ul>
      </div>
    </div>
  );
}
