import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

//State Defined

//Older Version == Must use Constructor


const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  )
}
/// BrouserRouter can be add in root directory [App.js]

export default App;
