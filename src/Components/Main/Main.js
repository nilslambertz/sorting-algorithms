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
            </div>
        )
    }

    printArray() {
        let arr = this.props.array;
        let len = arr.length;
        let width = Math.round(1000 / len);
        let margin = Math.floor((600 - len) / 300);
        let first = this.props.firstIndex;
        let second = this.props.secondIndex;

        let elemStyle = {
            width: width,
            marginLeft: margin + "px"
        }

        return this.props.array.map(function(c,i,a) {
            let special = null;
            if(i === first) special = "firstHighlight";
            if(i === second) special = "secondHighlight";
            return <ArrayElem style={{...elemStyle, height: c + "px"}} key={i} array={a} index={i} special={special}/>;
        })
    }
}

export default Main;
