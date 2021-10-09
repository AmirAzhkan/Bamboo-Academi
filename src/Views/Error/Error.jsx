import React, { Component } from "react";

import Menu from "../../Components/Common/Menu/Menu";

import ErrorCss from "./Error.module.css";

class Error extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className={`container-fluid ${ErrorCss.errorMotherDiv}`}>
          {/*                                                      row 1 */}
          <div className="row">
            <div className={`col-md-12 ${ErrorCss.errorDiv}`}>
              <div className={ErrorCss.errorHolder}>
                <Menu version="whiteMenu" />
                <div className={ErrorCss.errorBaner}>
                  <p>صفحه مورد نظر یافت نشد</p>
                  <p>درحال اتصال به صفحه اصلی</p>
                  <img
                    src={require("../../Assets/Images/Error/gif.svg").default}
                    alt="not found"
                  />
                </div>
              </div>
            </div>
            <div className={`${ErrorCss.errorMask}`}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Error;
