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
        this.setState({algorithm: nr});
        animation.changeAlgorithm(nr);
    }

    changeSpeed = (e) => {
        if(this.state.animationRunning) return;
        this.setState({animationSpeed: e.target.value});
        animation.changeSpeed(e.target.value);
    }

    changeElemNumber = (event) => {
        if(this.state.animationRunning) return;
        this.setState({numberOfElements: event.target.value}, () => {
            this.createArray();
        });
    }

    animationClick = () => {
       // animation.toggleAnimation();
        /*startAnimation(this.setState, this.state.swap.slice(0), this.state.array.slice(0),
            this.state.algorithm, this.state.animationSpeed, interval);*/
        /*
        if(arrayIsSorted(this.state.array.slice(0))) {
            return;
        }

        let newState = !this.state.animationRunning;
        this.setState({animationRunning: newState}, () => {
            if(newState === true) {
                this.startAnimation();
            } else {
                this.endAnimation(false);
            }
        });*/
    }

    startAnimation = () => {

        /*let arr = this.state.array.slice(0);
        let swap = this.state.swap.slice(0);
        let algo = this.state.algorithm;

        switch (algo) {
            case 0: {
                if(swap.length === 0) {
                    swap = doBubbleSort(arr);
                }
                this.setState({swap}, () => {
                    //this.renderBubbleSort(swap);
                });
                break;
            }
            default: {
                alert("error");
                break;
            }
        }*/
    }

    newArrayClick = () => {
        if (this.state.animationRunning) return;
        this.createArray();
    }

    /*
    endAnimation = (finished) => {
        clearInterval(interval);
        this.setState({animationRunning: false});
        if(finished) {
            this.setState({firstIndex: null, secondIndex: null});
            if(arrayIsSorted(this.state.array.slice(0))) {
                this.setState({sorted: true});
            }
        }
    }*/

   /* renderBubbleSort = (swap) => {
        let speed = 505 - this.state.animationSpeed;
        interval = setInterval(() => {
            if(swap.length === 0) {
                this.endAnimation(true);
                return;
            }
            let x = swap.shift();
            let first = x.firstIndex;

            if(x.elementsSwapped === true) {
                let array = [...this.state.array];
                let temp = array[first];
                array[first] = array[first+1];
                array[first+1] = temp;
                this.setState({array, firstIndex: first+1, secondIndex: first});
            } else {
                this.setState({firstIndex: first, secondIndex: first+1});
            }
        }, speed);
    }*/

    createArray = () => {
        let array = createNewArray(this.state.numberOfElements, this.state.maxElems);
        animation.changeArray(array);
        this.setState({array});
        this.setState({firstIndex: null});
        this.setState({secondIndex: null});
        this.setState({sorted: false});
    }

    componentDidMount(){
        animation = new Animation(this.setState);
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
