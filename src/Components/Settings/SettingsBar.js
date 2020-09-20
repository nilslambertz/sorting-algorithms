import React from 'react';
import './SettingsBar.css';

function SettingsBar({setState, minElems, maxElems, numberOfElements, sorted, animationRunning, animationSpeed, changeElemNumber, newArrayClick, animationClick, changeSpeed}) {
    const playStyle = {
        color: "lightgreen"
    }
    const stopStyle = {
        color: "orange"
    }

    const newArrayStyle = {
        color: "lightblue"
    }

    return (
        <div id="settingsBar">
            <div id="settingsDiv">
                <table className={(animationRunning ? "disabled" : "")}>
                    <tbody>
                    <tr>
                        <td>
                            <input type="range" min={minElems} max={maxElems} value={numberOfElements} onChange={changeElemNumber}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {numberOfElements} elements
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                    <tr>
                        <td className={"settingsButton" + (sorted ? " disabledSetting" : "")} rowSpan="2" style={animationRunning ? stopStyle : playStyle} onClick={animationClick}>
                            {animationRunning ? "stop" : "start"}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={(animationRunning ? "disabled" : "")}>
                    <tbody>
                    <tr>
                        <td className="settingsButton" rowSpan="2" style={newArrayStyle} onClick={newArrayClick}>
                            new array
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={(animationRunning ? "disabled" : "")}>
                    <tbody>
                    <tr>
                        <td>
                            <input type="range" min="10" max="500" value={animationSpeed} onChange={changeSpeed}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            animation speed
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SettingsBar;
