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
    canvasDimensions: { width: 1130, height: 600 },
    isCanvasAvailable: false,
    canvasArea: '',
    savedCanvas: '',
    countClicks: () => {
      const { colors, activeColor } = this.state;
      const { index, color } = this.filterAndIndex(colors, activeColor);
      color.sessionclicks += 1;
      colors[index] = color;
      this.setState({ colors });
    },
    undoCanvas: () => {
      const { colors, activeColor, canvasArea } = this.state;
      const { index, color } = this.filterAndIndex(colors, activeColor);
      color.sessionclicks =
        color.sessionclicks > 0 ? color.sessionclicks - 1 : 0;
      colors[index] = color;
      canvasArea.undo();
      this.setState({ colors });
    },
    clearCanvas: () => {
      const { colors, canvasArea } = this.state;
      canvasArea.clear();
      colors.forEach(color => (color.sessionclicks = 0));
      this.setState({ colors });
    },
    colorChange: color => {
      this.setState({ activeColor: color });
    },
    saveCanvas: () => {
      let { colors, canvasArea, savedCanvas } = this.state;
      colors.forEach(color => (color.totalclicks += color.sessionclicks));
      colors.forEach(color => (color.sessionclicks = 0));
      savedCanvas = canvasArea.getSaveData();
      this.setState({ colors, isCanvasSaved: true, savedCanvas });
      this.postCanvasData(savedCanvas, colors);
    },
    getCanvasRef: canvasArea => {
      this.setState({ canvasArea, isCanvasAvailable: false });
    },
    loadSavedCanvas: () => {}
  };

  componentDidMount = async () => {
    try {
      const colors = await axios.get('http://localhost:5000/colors');
      this.setState({
        activeColor: colors.data[0],
        colors: colors.data,
        isCanvasAvailable: true
      });
    } catch (error) {
      console.log(error);
    }
  };

  postCanvasData = async (savedCanvas, colors) => {
    await axios.post('http://localhost:5000/colors', { savedCanvas, colors });
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
