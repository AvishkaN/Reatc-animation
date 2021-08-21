import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state ={
    modeIsOpen:false,
  }

  openModel=()=>{
    this.setState({modeIsOpen:true});
  };
  closeModel=()=>{
    this.setState({modeIsOpen:false});

  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
       {
         this.state.modeIsOpen && <Modal modelStatus={this.state.modeIsOpen} closeModel={this.closeModel}/>
       }
       {
        this.state.modeIsOpen && <Backdrop modelStatus={this.state.modeIsOpen}/> 
       }  
        <button className="Button" onClick={this.openModel}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
