import React, { Fragment } from 'react';
import { Consumer } from '../Context';
import { Button, Icon } from 'semantic-ui-react';

const ButtonComponent = () => {
  return (
    <Consumer>
      {context => {
        const {
          undoCanvas,
          clearCanvas,
          saveCanvas,
          loadSavedCanvas
        } = context.state;
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
            <Button size='medium' color='blue' onClick={saveCanvas}>
              <Icon name='save' />
              Save
            </Button>
            <Button size='medium' color='blue' onClick={loadSavedCanvas}>
              <Icon name='upload' />
              Load
            </Button>
          </Fragment>
        );
      }}
    </Consumer>
  );
};

export default ButtonComponent;
