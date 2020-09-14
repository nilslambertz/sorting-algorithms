import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div id="mainDiv">
                {this.printArray()}
            </div>
        )
    }

    printArray() {

    }

    static createNewArray() {
        console.log("XDDD");
    }
}

export default Main;
