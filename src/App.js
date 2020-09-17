import React from 'react';
import './App.css';
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import { doBubbleSort } from "./Algorithms/Bubblesort";
import { arrayIsSorted } from "./Utils/Functions";

let interval;

class App extends React.Component {
    state = {
        algorithm: 0,
        minElems: 5,
        maxElems: 600,
        numberOfElements: 100,
        animationSpeed: 500,
        animationRunning: false,
        array: [],
        swap: []
    }

    setAlgorithm = (nr) => {
        this.setState({
            algorithm: nr
        });
    }

    changeSpeed = (e) => {
        if(this.state.animationRunning) return;
        this.setState({animationSpeed: e.target.value});
    }

    changeElemNumber = (event) => {
        if(this.state.animationRunning) return;
        this.setState({numberOfElements: event.target.value});
        this.createNewArray(event.target.value);
    }

    animationClick = () => {
        if(arrayIsSorted(this.state.array.slice(0))) {
            return;
        }

        let newState = !this.state.animationRunning;
        this.setState({animationRunning: newState}, () => {
            if(newState === true) {
                this.startAnimation();
            } else {
                clearInterval(interval);
            }
        });
    }

    startAnimation = () => {
        let arr = this.state.array.slice(0);
        let swap = this.state.swap.slice(0);
        let algo = this.state.algorithm;

        switch (algo) {
            case 0: {
                if(swap.length === 0) {
                    swap = doBubbleSort(arr);
                }
                this.setState({swap}, () => {
                    this.renderBubbleSort(swap);
                });
                break;
            }
            default: {
                alert("error");
                break;
            }
        }
    }

    newArrayClick = () => {
        if (this.state.animationRunning) return;
        this.createNewArray(this.state.numberOfElements);
    }

    createNewArray = (elems) => {
        let max = this.state.maxElems;
        let allValues = [...Array(max).keys()];
        let array = [];
        for(let i = 0; i < elems; i++) {
            array[i] = allValues.splice(Math.floor(Math.random() * allValues.length), 1)[0] + 10;
        }
        this.setState({array});
    }

    renderBubbleSort = (swap) => {
        let speed = 510 - this.state.animationSpeed;
        interval = setInterval(() => {
            if(swap.length === 0) {
                clearInterval(interval);
                this.setState({animationRunning: false});
                return;
            }
            let x = swap.shift();
            let first = x.firstIndex;

            if(x.swapElements === true) {
                let array = [...this.state.array];
                let temp = array[first];
                array[first] = array[first+1];
                array[first+1] = temp;
                this.setState({array});
            }
        }, speed);
    }

    componentDidMount(){
        this.createNewArray(100);
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
                                <td className="settingsButton" rowSpan="2" style={this.state.animationRunning ? stopStyle : playStyle} onClick={this.animationClick}>
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
                <Main array={this.state.array} algorithm={this.state.algorithm} numberOfElements={this.state.numberOfElements} animationSpeed={this.state.animationSpeed}/>
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
