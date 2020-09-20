import React from 'react';
import './NavBar.css';
import NavElem from './NavElem';

function NavBar({algorithm, setAlgorithm, animationRunning}) {
    return (
        <div id="navbar">
            <NavElem title="bubblesort" algoNumber="0" setAlgorithm={setAlgorithm} currentAlgorithm={algorithm} animationRunning={animationRunning}/>
            <NavElem title="cocktailshakersort" algoNumber="4" setAlgorithm={setAlgorithm} currentAlgorithm={algorithm} animationRunning={animationRunning}/>
            <NavElem title="insertionsort" algoNumber="1" setAlgorithm={setAlgorithm} currentAlgorithm={algorithm} animationRunning={animationRunning}/>
            <NavElem title="mergesort" algoNumber="2" setAlgorithm={setAlgorithm} currentAlgorithm={algorithm} animationRunning={animationRunning}/>
            <NavElem title="quicksort" algoNumber="3" setAlgorithm={setAlgorithm} currentAlgorithm={algorithm} animationRunning={animationRunning}/>
            <NavElem title="shellsort" algoNumber="5" setAlgorithm={setAlgorithm} currentAlgorithm={algorithm} animationRunning={animationRunning}/>
        </div>
    );
}

export default NavBar;
