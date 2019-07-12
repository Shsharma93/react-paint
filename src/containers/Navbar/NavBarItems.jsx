import React from 'react';
import { Grid } from 'semantic-ui-react';
import ColorComponent from '../../components/ColorComponent';
import ButtonComponent from '../../components/ButtonComponent';
import LabelComponent from '../../components/LabelComponent';

const NavBarItems = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <ColorComponent />
        </Grid.Column>
        <Grid.Column width={7}>
          <ButtonComponent />
        </Grid.Column>
        <Grid.Column width={4}>
          <LabelComponent />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NavBarItems;
