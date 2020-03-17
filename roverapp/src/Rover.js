import React, { Component } from "react";

class Rover extends Component {
    render() {
        const { facing, ghost } = this.props;
        return <span className={ `rover ${facing} ${ghost ? 'ghost' : ''}`}></span>
    }
};

export default Rover; 