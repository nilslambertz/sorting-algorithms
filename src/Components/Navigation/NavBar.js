import React from 'react';
import './NavBar.css';

const algorithms = ["bubblesort", "cocktailshakersort", "combsort", "insertionsort", "mergesort", "quicksort", "shellsort"]

function NavBar({algorithm, setAlgorithm, animationRunning}) {
    function changeAlgorithm(title) {
        if(animationRunning === true) return;

        setAlgorithm(title);
    }

    return (
        <div id="navBar">
            {algorithms.map(function(c,i,a) {
                let className = "navElem";
                if(c === algorithm) {
                    className += " active";
                } else if(animationRunning){
                    className += " disabled"
                }
                return <div className={className} onClick={() => changeAlgorithm(c)}>{c}</div>;
            })}
        </div>
    );
}

export default NavBar;
