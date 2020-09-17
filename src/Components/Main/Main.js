import React from 'react';
import './Main.css';
import ArrayElem from "./ArrayElem";

class Main extends React.Component {
    render() {
        return (
            <div id="mainDiv">
                {this.printArray()}
            </div>
        )
    }

    printArray() {
        let arr = this.props.array;
        let len = arr.length;
        let width = Math.round(1000 / len);
        let margin = Math.floor((600 - len) / 300);

        let elemStyle = {
            width: width,
            marginLeft: margin + "px"
        }

        return this.props.array.map(function(c,i,a) {
            return <ArrayElem style={{...elemStyle, height: c + "px"}} key={i} array={a} index={i}/>;
        })
    }
}

export default Main;
