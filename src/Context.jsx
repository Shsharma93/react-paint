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
      let { colors, canvasArea } = this.state;
      colors.forEach(color => (color.totalclicks += color.sessionclicks));
      colors.forEach(color => (color.sessionclicks = 0));
      const savedCanvas = canvasArea.getSaveData();
      this.setState({ colors });
      this.postCanvasData(savedCanvas, colors);
    },
    getCanvasRef: canvasArea => {
      this.setState({ canvasArea, isCanvasAvailable: false });
    },
    loadSavedCanvas: async () => {
      const { canvasArea } = this.state;
      try {
        const canvas = await axios.get('http://localhost:5000/canvas');
        canvasArea.loadSaveData(JSON.stringify(canvas.data[0].canvas_name));
      } catch (error) {
        console.log(error);
      }
    }
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
    try {
      await axios.post('http://localhost:5000/colors', {
        savedCanvas,
        colors
      });
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
