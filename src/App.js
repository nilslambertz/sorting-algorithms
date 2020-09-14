import React from 'react';
import './App.css';
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";

class App extends React.Component{
    state = {
        algorithm: 0,
        numberOfElements: 100,
        animationSpeed: 500,
        animationRunning: false
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
        Main.createNewArray();
        this.setState({numberOfElements: event.target.value});
    }

    animationClick = () => {
        let newState = !this.state.animationRunning;
        this.setState({animationRunning: newState});
    }

    newArrayClick = () => {
        if(this.state.animationRunning) return;
        Main.createNewArray();
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
                                    <input type="range" min="5" max="600" value={this.state.numberOfElements} onChange={this.changeElemNumber}/>
                                </td>
                                <td className="settingsButton" rowSpan="2" style={this.state.animationRunning ? stopStyle : playStyle} onClick={this.animationClick}>
                                    {this.state.animationRunning ? "stop" : "start"}
                                </td>
                                <td className={"settingsButton" + (this.state.animationRunning ? " disabled" : "")} rowSpan="2" style={newArrayStyle} onClick={this.newArrayClick}>
                                    new array
                                </td>
                                <td className={(this.state.animationRunning ? "disabled" : "")}>
                                    <input type="range" min="10" max="500" style={{direction: "ltr"}} value={this.state.animationSpeed} onChange={this.changeSpeed}/>
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
                <Main algorithm={this.state.algorithm} numberOfElements={this.state.numberOfElements}/>
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
