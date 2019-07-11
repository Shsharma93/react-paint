import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    brushColor: 'fff',
    catenaryColor: 'fff',
    activeColor: 'red',
    setCanvas: '',
    undoCanvas: () => {
      this.state.setCanvas.undo();
    },
    clearCanvas: () => {
      this.state.setCanvas.clear();
    },
    colorChange: color => {
      this.setState({ brushColor: color });
    },
    canvasClearCall: canvasA => {
      
    }
  };

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
