import React from 'react';
import './App.css';
import NavBar from "./Components/Navigation/NavBar";

class App extends React.Component{
    state = {
        algorithm: 0
    }

    setAlgorithm = (nr) => {
        this.setState({
            algorithm: nr
        });
    }

    render() {
        return (
            <div className="App">
                <NavBar algorithm={this.state.algorithm} setAlgorithm={this.setAlgorithm}/>
            </div>
        )
    }

}

export default App;
