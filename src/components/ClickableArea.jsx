import React, { Component } from 'react';
import { Consumer } from '../Context';
import { Container } from 'semantic-ui-react';
import CanvasDraw from 'react-canvas-draw';

class ClickableArea extends Component {
  clearCanvas = () => {
    this.saveableCanvas.undo();
  };
  render() {
    return (
      <Consumer>
        {context => {
          const { brushColor } = context.state;
          return (
            <Container>
              <CanvasDraw
                ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                hideGrid
                brushColor={brushColor}
                catenaryColor={brushColor}
                canvasWidth={'1130px'}
                canvasHeight={'600px'}
                lazyRadius={'0'}
                brushRadius={'2'}
                style={{
                  boxShadow:
                    '0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)'
                }}
              />
            </Container>
          );
        }}
      </Consumer>
    );
  }
}

export default ClickableArea;
