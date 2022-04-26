import React from "react";
import "./ArrayElem.css";

class ArrayElem extends React.Component {
  render() {
    let className = "arrayElem bg-gray-300 ";
    if (this.props.sorted) {
      className += " transition-colors !bg-green-600";
    } else {
      if (this.props.special) className += " " + this.props.special;
    }
    return <div className={"flex-1 " + className} style={this.props.style} />;
  }
}

export default ArrayElem;
