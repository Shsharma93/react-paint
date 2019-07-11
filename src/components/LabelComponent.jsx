import React from 'react';
import { Label } from 'semantic-ui-react';

const LabelComponent = () => {
  return (
    <div style={{ marginTop: '0.3em' }}>
      <Label as='a' color='teal' size='large'>
        23
        <Label.Detail>Total Click</Label.Detail>
      </Label>
      <Label as='a' color='teal' size='large'>
        23
        <Label.Detail>This session Click</Label.Detail>
      </Label>
    </div>
  );
};

export default LabelComponent;
