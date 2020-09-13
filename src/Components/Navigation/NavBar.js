import React from 'react';
import './NavBar.css';
import NavElem from './NavElem';

function NavBar({algorithm, setAlgorithm}) {
    return (
        <div id="navbar">
            <NavElem title="bubblesort" algoNumber="0" setAlgorithm={setAlgorithm} currentAlgorithm={algorithm}/>
            <NavElem title="insertionsort" algoNumber="1" setAlgorithm={setAlgorithm} currentAlgorithm={algorithm}/>
            <NavElem title="mergesort" algoNumber="2" setAlgorithm={setAlgorithm} currentAlgorithm={algorithm}/>
        </div>
    );
}

export default NavBar;
