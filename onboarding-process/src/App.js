import React from 'react';
import {Route} from 'react-router-dom';

// import axios from 'axios';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={props=> <Form {...props} />} />
    </div>
  );
}

export default App;
