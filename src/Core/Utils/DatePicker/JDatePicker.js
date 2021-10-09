import { useState } from "react";
import JCalendar from "./JCalendar";
import moment from "moment-jalaali";
export default function JDatePiker({ onSubmitDate, name }) {
  const [newDate, setNewDate] = useState(moment().format("jYYYY/jMM/jDD"));
  const [saveDate, setSaveDate] = useState(moment().format("jYYYY/jMM/jDD"));

  const handleChange = (date) => {
    setSaveDate(date);
  };

  const changeDate = () => {
    setNewDate(saveDate);
    onSubmitDate({ target: { name: name, value: saveDate } });
  };

  return (
    <>
      <input
        className="form-control"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        value={newDate}
        onChange={() => ""}
      />

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-body">
              <JCalendar changeSaveDate={handleChange} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-danger"
                data-bs-dismiss="modal"
              >
                &nbsp;&nbsp; لغو &nbsp;&nbsp;
              </button>
              <button
                className="btn btn-sm  btn-primary"
                data-bs-dismiss="modal"
                onClick={changeDate}
              >
                تایید تاریخ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
