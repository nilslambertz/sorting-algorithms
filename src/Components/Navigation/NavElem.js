import React from 'react';
import './NavBar.css';

function NavElem({title, setAlgorithm, currentAlgorithm, animationRunning}) {
    function algoChange() {
        if(animationRunning) return;
        setAlgorithm(title);
    }

    let className = "navElem";
    if(title === currentAlgorithm) {
        className += " active";
    } else if(animationRunning){
        className += " disabled"
    }

    return (
        <div className={className} onClick={algoChange}>
            <span>{title}</span>
        </div>
    );
}

export default NavElem;