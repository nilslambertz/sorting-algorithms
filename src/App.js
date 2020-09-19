import React from 'react';
import './App.css';
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import { createNewArray } from "./Utils/Functions";
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
        sorted: false
    }

    setAlgorithm = (nr) => {
        nr = parseInt(nr);
        this.setState({algorithm: nr}, () => {
            animation.changeAlgorithm(nr);
        });
    }

    changeSpeed = (e) => {
        e = parseInt(e);
        if(this.state.animationRunning) return;
        this.setState({animationSpeed: e.target.value});
        animation.changeSpeed(e.target.value);
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
            this.setState({animationRunning: true});
            animation.startAnimation();
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
        this.setState({firstIndex: null});
        this.setState({secondIndex: null});
        this.setState({sorted: false});
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
                    <table>
                        <tbody>
                            <tr>
                                <td className={(this.state.animationRunning ? "disabled" : "")}>
                                    <input type="range" min={this.state.minElems} max={this.state.maxElems} value={this.state.numberOfElements} onChange={this.changeElemNumber}/>
                                </td>
                                <td className={"settingsButton" + (this.state.sorted ? " disabledSetting" : "")} rowSpan="2" style={this.state.animationRunning ? stopStyle : playStyle} onClick={this.animationClick}>
                                    {this.state.animationRunning ? "stop" : "start"}
                                </td>
                                <td className={"settingsButton" + (this.state.animationRunning ? " disabled" : "")} rowSpan="2" style={newArrayStyle} onClick={this.newArrayClick}>
                                    new array
                                </td>
                                <td className={(this.state.animationRunning ? "disabled" : "")}>
                                    <input type="range" min="10" max="500" value={this.state.animationSpeed} onChange={this.changeSpeed}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={(this.state.animationRunning ? "disabled" : "")}>
                                    {this.state.numberOfElements} elements
                                </td>
                                <td className={(this.state.animationRunning ? "disabled" : "")}>
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
