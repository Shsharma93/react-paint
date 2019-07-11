import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    brushColor: 'fff',
    catenaryColor: 'fff',
    activeColor: 'red',
    undoCanvas: () => {
      console.log('Clicked Undo');
    },
    clearCanvas: () => {
      console.log('Clicked Clear');
    },
    colorChange: color => {
      this.setState({ brushColor: color });
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
