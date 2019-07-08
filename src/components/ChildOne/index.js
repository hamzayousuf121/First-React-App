import React, { Component } from "react";

class ChildOne extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#ffffff"}}>
                <h1>ChildOne Component</h1>
                <div style={{backgroundColor:this.props.color,height:300,margin:20,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1>Color</h1>
                </div>
            </div>
        )
    }
} 

export default ChildOne;