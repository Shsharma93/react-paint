import React, { Fragment } from 'react';
import { Consumer } from '../Context';
import { Button, Icon } from 'semantic-ui-react';

const ButtonComponent = () => {
  return (
    <Consumer>
      {context => {
        const { undoCanvas, clearCanvas } = context.state;
        return (
          <Fragment>
            <Button size='medium' color='blue' onClick={undoCanvas}>
              <Icon name='undo' />
              Undo
            </Button>
            <Button size='medium' color='blue' onClick={clearCanvas}>
              <Icon name='trash' />
              Clear
            </Button>
            <Button size='medium' color='blue'>
              <Icon name='save' />
              Save
            </Button>
          </Fragment>
        );
      }}
    </Consumer>
  );
};

export default ButtonComponent;
