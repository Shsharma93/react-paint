import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import { Consumer } from '../Context';

const ColorComponent = () => {
  return (
    <Consumer>
      {context => {
        const { colorChange } = context.state;
        return (
          <Fragment>
            <h3 style={{ marginRight: '10px', display: 'inline-block' }}>
              Colors
            </h3>
            <Button
              active
              inverted
              size='large'
              color='red'
              onClick={() => colorChange('red')}
            >
              Red
            </Button>
            <Button
              inverted
              size='large'
              color='blue'
              onClick={() => colorChange('blue')}
            >
              Blue
            </Button>
            <Button
              inverted
              size='large'
              color='brown'
              onClick={() => colorChange('brown')}
            >
              Brown
            </Button>
          </Fragment>
        );
      }}
    </Consumer>
  );
};

export default ColorComponent;
