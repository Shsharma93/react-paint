import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    brushColor: 'red',
    catenaryColor: 'red',
    activeColor: 'red',
    setCanvas: '',
    isCanvasUndo: false,
    isCanvasCleared: false,
    totalClicks: 0,
    sessionClicks: 0,
    countClick: () => {
      const sessionClicks = this.state.sessionClicks + 1;
      console.log('SessionClicks');
      this.setState({ sessionClicks });
    },
    undoCanvas: () => {
      const sessionClicks =
        this.state.sessionClicks > 0 ? this.state.sessionClicks - 1 : 0;
      this.setState({ isCanvasUndo: true, sessionClicks });
    },
    changeCanvasUndo: () => {
      this.setState({ isCanvasUndo: false });
    },
    clearCanvas: () => {
      const sessionClicks = 0;
      this.setState({ isCanvasCleared: true, sessionClicks });
    },
    changeCanvasClear: () => {
      console.log('cli');
      this.setState({ isCanvasCleared: false });
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
