import React, { Component } from "react";
import PropsWork  from "../PropsWork";
import "./styles.css"

class StateWork extends Component {
    constructor() {
        super();
        this.state = {
            color:"#ffffff"
        }
    }
    _changeColorHandler(color) {
        this.setState({color})
    }
    render() {
        return (
            <div>
            <div className="container" style={{backgroundColor:this.state.color}}>
            <h1>State Color</h1>
            </div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <button onClick={() => this._changeColorHandler('green')} className="btn1">Red</button>
            <button onClick={() => this._changeColorHandler('yellow')} className="btn2">Red</button>
            <button onClick={() => this._changeColorHandler('red')} className="btn3">Red</button>
            <button onClick={() => this._changeColorHandler('blue')} className="btn4">Red</button>
            <button onClick={() => this._changeColorHandler('brown')} className="btn5">Red</button>
            </div>
            <PropsWork color={this.state.color}/>
            </div>
        )
    }
}
export default StateWork;