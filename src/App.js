import React from "react";
import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import { arrayIsSorted, createNewArray } from "./Utils/Functions";
import Animation from "./Utils/Animation";
import SettingsBar from "./Components/Settings/SettingsBar";

let animation;

const playStyle = {
  color: "lightgreen",
};
const stopStyle = {
  color: "orange",
};

class App extends React.Component {
  state = {
    algorithms: [],
    currentAlgorithm: "mergesort",
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
    swaps: 0,
    executionTime: 0,
    settingsMenuOpen: false,
    algorithmsMenuOpen: false,
    sorted: false,
  };

  setAlgorithm = (algo) => {
    this.setState({ currentAlgorithm: algo }, () => {
      animation.changeAlgorithm(algo);
      this.setState({
        firstIndex: null,
        secondIndex: null,
        leftBorder: null,
        rightBorder: null,
        mid: null,
      });
    });
  };

  changeSpeed = (e) => {
    let newSpeed = parseFloat(e.target.value);
    if (this.state.animationRunning) return;
    this.setState({ animationSpeed: newSpeed });
    animation.changeSpeed(newSpeed);
  };

  changeElemNumber = (event) => {
    if (this.state.animationRunning) return;
    this.setState({ numberOfElements: parseInt(event.target.value) }, () => {
      this.createArray();
    });
  };

  animationClick = () => {
    if (this.state.animationRunning) {
      animation.endAnimation();
      this.setState({ animationRunning: false });
    } else if (this.state.sorted === false) {
      this.setState({ settingsMenuOpen: false });
      this.setState({ algorithmsMenuOpen: false });

      this.setState({ animationRunning: true }, () => {
        let success = animation.startAnimation();
        if (!success) {
          this.setState({ animationRunning: false });
        }
      });
    }
  };

  newArrayClick = () => {
    if (this.state.animationRunning) return;
    this.createArray();
  };

  changeState = (e) => {
    this.setState(e);
  };

  createArray = () => {
    let array = createNewArray(
      this.state.numberOfElements,
      this.state.maxElems
    );
    animation.changeArray(array);
    this.setState({ array });
    this.setState({
      sorted: arrayIsSorted(array),
      firstIndex: null,
      secondIndex: null,
      leftBorder: null,
      rightBorder: null,
      mid: null,
    });
  };

  componentDidMount() {
    animation = new Animation(this.changeState, this.state.currentAlgorithm);
    let algos = animation.getAlgorithmTitles();
    this.setState({ algorithms: algos });
    this.createArray();
  }

  toggleSettingsMenu = () => {
    if (this.state.algorithmsMenuOpen) {
      document.getElementById("navBar").classList.remove("visible");
      this.setState({ algorithmsMenuOpen: false });
    }

    let settingsMenuOpen = this.state.settingsMenuOpen;
    if (settingsMenuOpen) {
      document.getElementById("settingsBar").classList.remove("visible");
    } else {
      document.getElementById("settingsBar").classList.add("visible");
    }
    this.setState({ settingsMenuOpen: !settingsMenuOpen });
  };

  toggleAlgorithmsMenu = () => {
    if (this.state.settingsMenuOpen) {
      document.getElementById("settingsBar").classList.remove("visible");
      this.setState({ settingsMenuOpen: false });
    }

    document.getElementById("settingsBar").classList.remove("visible");
    let algorithmsMenuOpen = this.state.algorithmsMenuOpen;
    if (algorithmsMenuOpen) {
      document.getElementById("navBar").classList.remove("visible");
    } else {
      document.getElementById("navBar").classList.add("visible");
    }
    this.setState({ algorithmsMenuOpen: !algorithmsMenuOpen });
  };

  render() {
    return (
      <div className="App w-full h-full flex flex-col bg-blue-800 bg-opacity-80">
        <div id="smallScreenNav">
          <div
            id="settingsIcon"
            className="smallScreenNavElem"
            onClick={this.toggleSettingsMenu}
          >
            <img src={require("./images/settingsIcon.png")} alt="Settings" />
          </div>
          <div
            className={
              "settingsButton" + (this.state.sorted ? " noClickSetting" : "")
            }
            style={this.state.animationRunning ? stopStyle : playStyle}
            onClick={this.animationClick}
          >
            {this.state.animationRunning ? "stop" : "start"}
          </div>
          <div
            id="algorithmIcon"
            className="smallScreenNavElem"
            onClick={this.toggleAlgorithmsMenu}
          >
            <img src={require("./images/algorithmIcon.png")} alt="Algorithm" />
          </div>
        </div>
        <NavBar
          algorithms={this.state.algorithms}
          currentAlgorithm={this.state.currentAlgorithm}
          animationRunning={this.state.animationRunning}
          setAlgorithm={this.setAlgorithm}
        />
        <SettingsBar
          maxElems={this.state.maxElems}
          numberOfElements={this.state.numberOfElements}
          sorted={this.state.sorted}
          animationRunning={this.state.animationRunning}
          animationSpeed={this.state.animationSpeed}
          changeElemNumber={this.changeElemNumber}
          newArrayClick={this.newArrayClick}
          animationClick={this.animationClick}
          changeSpeed={this.changeSpeed}
        />
        <div
          id="informationDiv"
          className="px-5 py-1 border-b flex flex-row justify-between text-gray-300"
        >
          <span>
            swaps: <span className="text-white">{this.state.swaps}</span>
          </span>
          <span>
            execution time:{" "}
            <span className="text-white">{this.state.executionTime}ms</span>
          </span>
        </div>
        <Main
          array={this.state.array}
          numberOfElements={this.state.numberOfElements}
          animationSpeed={this.state.animationSpeed}
          firstIndex={this.state.firstIndex}
          secondIndex={this.state.secondIndex}
          leftBorder={this.state.leftBorder}
          rightBorder={this.state.rightBorder}
          mid={this.state.mid}
          sorted={this.state.sorted}
        />
        <div id="footer">
          by{" "}
          <a
            href="http://www.nilslambertz.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            nils lambertz
          </a>{" "}
          -{" "}
          <a
            href="https://github.com/nilslambertz/ArraySortReact"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
        </div>
      </div>
    );
  }
}

export default App;
