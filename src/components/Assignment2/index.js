import React, { Component } from "react";
import ChildOne from "../ChildOne";
import ChildTwo from "../ChildTwo";

class Assignment2 extends Component {
    constructor() {
        super();
        this.state = {
            color:"#ffffff"
        }
    }
    _changeColorHandler = (color) => {
        this.setState({color})
    }
    render() {
        return (
            <div style={{backgroundColor:"#DCDCDC",padding:50}}>
                <h1>Parent Component</h1>
                <ChildOne color={this.state.color}/>
                <ChildTwo changeColor={this._changeColorHandler}/>
            </div>
        )
    }
} 

export default Assignment2;