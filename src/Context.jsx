import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    colors: [
      { name: 'red', totalClicks: 0, sessionClicks: 0 },
      { name: 'blue', totalClicks: 0, sessionClicks: 0 },
      { name: 'brown', totalClicks: 0, sessionClicks: 0 }
    ],
    activeColor: { name: 'red', totalClicks: 0, sessionClicks: 0 },
    isCanvasUndo: false,
    isCanvasCleared: false,
    countClick: () => {
      const { colors, activeColor } = this.state;
      const { index, color } = this.filterAndIndex(colors, activeColor);
      color.sessionClicks += 1;
      colors[index] = color;
      console.log(color);
      this.setState({ colors });
    },
    undoCanvas: () => {
      const { colors, activeColor } = this.state;
      const { index, color } = this.filterAndIndex(colors, activeColor);
      color.sessionClicks =
        color.sessionClicks > 0 ? color.sessionClicks - 1 : 0;
      colors[index] = color;
      console.log(color);
      this.setState({ isCanvasUndo: true, colors });
    },
    changeCanvasUndo: () => {
      this.setState({ isCanvasUndo: false });
    },
    clearCanvas: () => {
      const { colors, activeColor } = this.state;
      const { index, color } = this.filterAndIndex(colors, activeColor);
      color.sessionClicks = 0;
      colors[index] = color;
      this.setState({ isCanvasCleared: true, colors });
    },
    changeCanvasClear: () => {
      this.setState({ isCanvasCleared: false });
    },
    colorChange: color => {
      this.setState({ activeColor: color });
    }
  };

  componentDidMount = () => {
    this.setState({ activeColor: this.state.colors[0] });
  };

  filterAndIndex = (colors, activeColor) => {
    const color = colors.filter(color => color.name === activeColor.name);
    const index = colors.findIndex(color => color.name === activeColor.name);
    return { color: color[0], index };
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
