import React, { Component } from "react";

class CountUp extends Component {
  state = {
    count: 0,
  };

  render() {
    let { count } = this.state;

    return (
      <React.Fragment>
        <div id="ni1">{count}</div>
      </React.Fragment>
    );
  }

  didi = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    const interval = setInterval(
      (function (scope) {
        return async function () {
          console.log("hello");
        };
      })(this),
      1000
    );
  }

  //  if (window.pageYOffset > 350)
  // this.myInterval = setInterval(this.didi, 1000);
}

export default CountUp;
