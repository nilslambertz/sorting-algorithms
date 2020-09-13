import React from 'react';
import '../css/NavBar.css';
import NavElem from './NavElem';

function NavBar({setAlgorithm, currentAlgorithm}) {
    return (
        <div id="navbar">
            <NavElem title="bubblesort" algoNumber="0" setAlgorithm={setAlgorithm} currentAlgorithm={currentAlgorithm}/>
            <NavElem title="insertionsort" algoNumber="1" setAlgorithm={setAlgorithm} currentAlgorithm={currentAlgorithm}/>
            <NavElem title="mergesort" algoNumber="2" setAlgorithm={setAlgorithm} currentAlgorithm={currentAlgorithm}/>
        </div>
    );
}

export default NavBar;
