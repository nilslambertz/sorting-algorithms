import React from 'react';
import './Main.css';
import ArrayElem from "./ArrayElem";

class Main extends React.Component {
    render() {
        let className = "";
        if(this.props.sorted === true) className = "sorted";
        return (
            <div id="mainDiv" className={className}>
                {this.printArray()}
                <div id="footer">by <a href="http://www.nilslambertz.de" target="_blank" rel="noopener noreferrer">nils lambertz</a></div>
            </div>
        )
    }

    printArray() {
        let arr = this.props.array;
        let len = arr.length;
        let width = 50 / len + "%";
        let margin = Math.max(Math.ceil((600 - len) / 350), 1);
        let first = this.props.firstIndex;
        let second = this.props.secondIndex;
        let leftBorder = this.props.leftBorder;
        let rightBorder = this.props.rightBorder;
        let mid = this.props.mid;
        let notNull = mid !== null && leftBorder !== null && rightBorder !== null;

        let elemStyle = {
            width: width,
            marginLeft: margin
        }

        return this.props.array.map(function(c,i,a) {
            let special = null;
            if(leftBorder <= i && i <= rightBorder && notNull) {
                if(i < mid) special = "leftHalf";
                else special = "rightHalf";
            }
            if(i === first) special = "firstHighlight";
            if(i === second) special = "secondHighlight";
            return <ArrayElem style={{...elemStyle, height: c + "px"}} key={i} array={a} index={i} special={special}/>;
        })
    }
}

export default Main;
