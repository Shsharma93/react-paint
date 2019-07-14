import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    colors: [
      { name: 'red', totalclicks: 0, sessionclicks: 0 },
      { name: 'blue', totalclicks: 0, sessionclicks: 0 },
      { name: 'brown', totalclicks: 0, sessionclicks: 0 }
    ],
    activeColor: { name: 'red', totalclicks: 0, sessionclicks: 0 },
    isCanvasUndo: false,
    isCanvasCleared: false,
    canvasDimensions: { width: 1130, height: 600 },
    countClick: () => {
      const { colors, activeColor } = this.state;
      const { index, color } = this.filterAndIndex(colors, activeColor);
      color.sessionclicks += 1;
      colors[index] = color;
      console.log(color);
      this.setState({ colors });
    },
    undoCanvas: () => {
      const { colors, activeColor } = this.state;
      const { index, color } = this.filterAndIndex(colors, activeColor);
      color.sessionclicks =
        color.sessionclicks > 0 ? color.sessionclicks - 1 : 0;
      colors[index] = color;
      console.log(color);
      this.setState({ isCanvasUndo: true, colors });
    },
    changeCanvasUndo: () => {
      this.setState({ isCanvasUndo: false });
    },
    clearCanvas: () => {
      const { colors } = this.state;
      colors.forEach(color => (color.sessionclicks = 0));
      this.setState({ isCanvasCleared: true, colors });
    },
    changeCanvasClear: () => {
      this.setState({ isCanvasCleared: false });
    },
    colorChange: color => {
      this.setState({ activeColor: color });
    }
  };

  componentDidMount = async () => {
    try {
      const colors = await axios.get('http://localhost:5000/colors');
      this.setState({ activeColor: colors.data[0], colors: colors.data });
    } catch (error) {
      console.log(error);
    }
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
