import React, { Component } from 'react';
import { Consumer } from '../Context';
import { Container } from 'semantic-ui-react';
import CanvasDraw from 'react-canvas-draw';

class ClickableArea extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <Consumer>
        {context => {
          const {
            countClicks,
            activeColor,
            canvasDimensions,
            isCanvasAvailable,
            getCanvasRef
          } = context.state;

          if (isCanvasAvailable) {
            getCanvasRef(this.myRef.current);
          }

          return (
            <Container onClick={countClicks}>
              <CanvasDraw
                ref={this.myRef}
                hideGrid
                brushColor={activeColor.name}
                catenaryColor={activeColor.name}
                canvasWidth={canvasDimensions.width}
                canvasHeight={canvasDimensions.height}
                lazyRadius={0}
                brushRadius={0}
                style={{
                  border: '2px solid blue',
                  boxShadow:
                    '0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 13px 27px -5px rgba(50, 50, 93, 0.25)'
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
