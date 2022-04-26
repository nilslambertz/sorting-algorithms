import React from "react";
import ArrayElem from "./ArrayElem";

class Main extends React.Component {
  render() {
    return (
      <div
        id="mainDiv"
        className="px-10 flex flex-row justify-center gap-[1px]"
      >
        {this.printArray()}
      </div>
    );
  }

  printArray() {
    let first = this.props.firstIndex;
    let second = this.props.secondIndex;
    let leftBorder = this.props.leftBorder;
    let rightBorder = this.props.rightBorder;
    let mid = this.props.mid;
    let notNull = mid !== null && leftBorder !== null && rightBorder !== null;

    return this.props.array.map(function (c, i, a) {
      let special = null;
      if (leftBorder <= i && i <= rightBorder && notNull) {
        if (i < mid) special = "leftHalf";
        else special = "rightHalf";
      }
      if (i === first) special = "firstHighlight";
      if (i === second) special = "secondHighlight";
      return (
        <ArrayElem
          style={{ height: c + "px" }}
          key={i}
          array={a}
          index={i}
          special={special}
        />
      );
    });
  }
}

export default Main;
