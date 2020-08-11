import React, {useState} from 'react';
import '../css/App.css';
import NavBar from "./NavBar";

function App() {
    const [algorithm, setAlgorithm] = useState(0);

    return (
        <div className="App">
            <NavBar setAlgorithm={setAlgorithm} currentAlgorithm={algorithm}/>
        </div>
    )

}

export default App;
