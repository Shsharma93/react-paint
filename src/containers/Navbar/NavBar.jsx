import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import NavBarItems from './NavBarItems';

const NavBar = () => {
  const style = {
    h1: {
      marginTop: '3em'
    },
    border: {
      border: '5px solid white'
    }
  };

  return (
    <Container style={style.h1}>
      <Segment padded='very' attached='top'>
        <NavBarItems />
      </Segment>
    </Container>
  );
};

export default NavBar;
