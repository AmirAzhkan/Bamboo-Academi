import React from "react";
import ProgressCss from "./ProgressBar.module.css";

export const ProgressBar = (props) => {
  const { progress, progressCss, progressBarCss } = props;

  return (
    <div className={`p-0 rounded-0 ${ProgressCss[progressCss]}`}>
      <div
        className={`${ProgressCss[progressBarCss]}`}
        role="progressbar"
        style={{ width: [progress] }}
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}
      </div>
    </div>
  );
};

export default ProgressBar;
