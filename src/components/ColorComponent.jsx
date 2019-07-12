import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import { Consumer } from '../Context';

const ColorComponent = () => {
  return (
    <Consumer>
      {context => {
        const { colorChange, activeColor, colors } = context.state;

        const colorButtons = colors.map((color, i) => {
          const colorName =
            color.name.charAt(0).toUpperCase() + color.name.slice(1);
          return (
            <Button
              active={color.name === activeColor.name ? true : false}
              inverted
              size='medium'
              color={color.name}
              onClick={() => colorChange(color)}
              key={i}
            >
              {colorName}
            </Button>
          );
        });
        return (
          <Fragment>
            <h3 style={{ marginRight: '10px', display: 'inline-block' }}>
              Colors
            </h3>
            {colorButtons}
          </Fragment>
        );
      }}
    </Consumer>
  );
};

export default ColorComponent;
