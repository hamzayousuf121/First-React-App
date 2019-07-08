import React, { Component } from "react";
import "./styles.css";
class StateWork extends Component {
    render() {
        return (
            <div>
            <div className="container" style={{backgroundColor:this.props.color}}>
            <h1>Props Color</h1>
            </div>
            </div>
        )
    }
}
export default StateWork;