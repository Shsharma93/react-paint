import React from 'react';
import { Consumer } from '../Context';
import { Label } from 'semantic-ui-react';

const LabelComponent = () => {
  return (
    <Consumer>
      {context => {
        const { activeColor } = context.state;
        return (
          <div style={{ marginTop: '0.3em' }}>
            <Label color='teal' size='small'>
              {activeColor.totalclicks}
              <Label.Detail>Total Click</Label.Detail>
            </Label>
            <Label color='teal' size='small'>
              {activeColor.sessionclicks}
              <Label.Detail>This session Click</Label.Detail>
            </Label>
          </div>
        );
      }}
    </Consumer>
  );
};

export default LabelComponent;
