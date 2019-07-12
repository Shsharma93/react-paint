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
            isCanvasCleared,
            isCanvasUndo,
            countClick,
            changeCanvasUndo,
            changeCanvasClear,
            activeColor
          } = context.state;

          if (isCanvasCleared) {
            this.myRef.current.clear();
            changeCanvasClear();
          }
          if (isCanvasUndo) {
            this.myRef.current.undo();
            changeCanvasUndo();
          }
          return (
            <Container onClick={countClick}>
              <CanvasDraw
                ref={this.myRef}
                hideGrid
                brushColor={activeColor.name}
                catenaryColor={activeColor.name}
                canvasWidth={'1130px'}
                canvasHeight={'600px'}
                lazyRadius={0}
                brushRadius={0}
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
