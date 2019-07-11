import React from 'react';
import './App.css';
import NavBar from './containers/Navbar/NavBar';
import ClickableArea from './components/ClickableArea';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from './Context';

const App = () => {
  return (
    <Provider>
      <div className='App'>
        <NavBar />
        <ClickableArea />
      </div>
    </Provider>
  );
};

export default App;
