import React from 'react';
import "./ArrayElem.css";

class ArrayElem extends React.Component {
    render() {
        return (
            <div className="arrayElem" style={this.props.style}/>
        )
    }
}

export default ArrayElem;