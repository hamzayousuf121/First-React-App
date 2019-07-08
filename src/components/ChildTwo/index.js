import React, { Component } from "react";

class ChildTwo extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#ffffff"}}>
                <h1>ChildTwo Component</h1>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <button onClick={() => this.props.changeColor('green')} style={{backgroundColor:"green",color:"#ffffff",padding:20,borderRadius:5,borderColor:"green"}}>Red</button>
                <button onClick={() => this.props.changeColor('yellow')} style={{backgroundColor:"yellow",color:"#ffffff",padding:20,borderRadius:5,borderColor:"yellow"}}>Red</button>
                <button onClick={() => this.props.changeColor('red')} style={{backgroundColor:"red",color:"#ffffff",padding:20,borderRadius:5,borderColor:"red"}}>Red</button>
                <button onClick={() => this.props.changeColor('blue')} style={{backgroundColor:"blue",color:"#ffffff",padding:20,borderRadius:5,borderColor:"blue"}}>Red</button>
                <button onClick={() => this.props.changeColor('brown')} style={{backgroundColor:"brown",color:"#ffffff",padding:20,borderRadius:5,borderColor:"brown"}}>Red</button>
                </div>
            </div>
        )
    }
} 

export default ChildTwo;