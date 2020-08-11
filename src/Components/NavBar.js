import React from 'react';
import '../css/NavBar.css';
import NavElem from './NavElem';

function NavBar({setAlgorithm, currentAlgorithm}) {
    return (
        <div id="navbar">
            <NavElem title="bubblesort" algoNumber="0" setAlgorithm={setAlgorithm} currentAlgorithm={currentAlgorithm}/>
        </div>
    );
}

export default NavBar;
