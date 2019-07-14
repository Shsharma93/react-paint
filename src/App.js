import React from 'react';
import './App.css';
import NavBar from './containers/navbar/NavBar';
import Canvas from './components/Canvas';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from './Context';

const App = () => {
  return (
    <Provider>
      <div className='App'>
        <NavBar />
        <br />
        <Canvas />
      </div>
    </Provider>
  );
};

export default App;
