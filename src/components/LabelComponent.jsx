import React from 'react';
import { Consumer } from '../Context';
import { Label } from 'semantic-ui-react';

const LabelComponent = () => {
  return (
    <Consumer>
      {context => {
        const { totalClicks, sessionClicks } = context.state;
        return (
          <div style={{ marginTop: '0.3em' }}>
            <Label color='teal' size='small'>
              {totalClicks}
              <Label.Detail>Total Click</Label.Detail>
            </Label>
            <Label color='teal' size='small'>
              {sessionClicks}
              <Label.Detail>This session Click</Label.Detail>
            </Label>
          </div>
        );
      }}
    </Consumer>
  );
};

export default LabelComponent;
