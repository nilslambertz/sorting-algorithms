import React from 'react';
import './NavBar.css';

function NavBar({algorithms, currentAlgorithm, setAlgorithm, animationRunning}) {
    function changeAlgorithm(title) {
        if(animationRunning === true) return;

        setAlgorithm(title);
    }

    return (
        <div id="navBar">
            {algorithms.map(function(c,i,a) {
                let className = "navElem";
                if(c === currentAlgorithm) {
                    className += " active";
                } else if(animationRunning){
                    className += " disabled"
                }
                return <div key={c} className={className} onClick={() => changeAlgorithm(c)}>{c}</div>;
            })}
        </div>
    );
}

export default NavBar;
