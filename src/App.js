import React from 'react';
import './App.css';
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import {arrayIsSorted, createNewArray} from "./Utils/Functions";
import Animation from "./Utils/Animation";

let animation;

class App extends React.Component {
    state = {
        algorithm: 0,
        minElems: 5,
        maxElems: 600,
        numberOfElements: 100,
        animationSpeed: 500,
        animationRunning: false,
        array: [],
        firstIndex: null,
        secondIndex: null,
        leftBorder: null,
        rightBorder: null,
        mid: null,
        sorted: false
    }

    setAlgorithm = (nr) => {
        nr = parseInt(nr);
        this.setState({algorithm: nr}, () => {
            animation.changeAlgorithm(nr);
            this.setState({firstIndex: null, secondIndex: null, leftBorder: null, rightBorder: null, mid: null});
        });
    }

    changeSpeed = (e) => {
        let newSpeed = parseFloat(e.target.value);
        if(this.state.animationRunning) return;
        this.setState({animationSpeed: newSpeed});
        animation.changeSpeed(newSpeed);
    }

    changeElemNumber = (event) => {
        if(this.state.animationRunning) return;
        this.setState({numberOfElements: parseInt(event.target.value)}, () => {
            this.createArray();
        });
    }

    animationClick = () => {
        if(this.state.animationRunning) {
            animation.endAnimation();
            this.setState({animationRunning: false});
        } else if(this.state.sorted === false) {
            this.setState({animationRunning: true}, () =>
            {
                let success = animation.startAnimation();
                if(!success) {
                    this.setState({animationRunning: false});
                }
            });
        }
    }

    newArrayClick = () => {
        if (this.state.animationRunning) return;
        this.createArray();
    }

    changeState = (e) => {
        this.setState(e);
    }

    createArray = () => {
        let array = createNewArray(this.state.numberOfElements, this.state.maxElems);
        animation.changeArray(array);
        this.setState({array});
        this.setState({sorted: arrayIsSorted(array), firstIndex: null, secondIndex: null, leftBorder: null, rightBorder: null, mid: null});
    }

    componentDidMount(){
        animation = new Animation(this.changeState);
        this.createArray();
    }

    render() {
        return (
            <div className="App">
                <NavBar algorithm={this.state.algorithm} animationRunning={this.state.animationRunning} setAlgorithm={this.setAlgorithm}/>
                <div id="settingsDiv">
                    <table className={(this.state.animationRunning ? "disabled" : "")}>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="range" min={this.state.minElems} max={this.state.maxElems} value={this.state.numberOfElements} onChange={this.changeElemNumber}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.numberOfElements} elements
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td className={"settingsButton"} rowSpan="2" style={this.state.animationRunning ? stopStyle : playStyle} onClick={this.animationClick}>
                                    {this.state.animationRunning ? "stop" : "start"}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={(this.state.animationRunning ? "disabled" : "")}>
                        <tbody>
                            <tr>
                                <td className={"settingsButton" + (this.state.animationRunning ? " disabled" : "")} rowSpan="2" style={newArrayStyle} onClick={this.newArrayClick}>
                                    new array
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={(this.state.animationRunning ? "disabled" : "")}>
                        <tbody>
                        <tr>
                            <td>
                                <input type="range" min="10" max="500" value={this.state.animationSpeed} onChange={this.changeSpeed}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                animation speed
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <Main array={this.state.array}
                      algorithm={this.state.algorithm}
                      numberOfElements={this.state.numberOfElements}
                      animationSpeed={this.state.animationSpeed}
                      firstIndex={this.state.firstIndex}
                      secondIndex={this.state.secondIndex}
                      leftBorder={this.state.leftBorder}
                      rightBorder={this.state.rightBorder}
                      mid={this.state.mid}
                      sorted={this.state.sorted}
                />
            </div>
        )
    }
}

const playStyle = {
    color: "lightgreen"
}
const stopStyle = {
    color: "orange"
}

const newArrayStyle = {
    color: "lightblue"
}

export default App;
