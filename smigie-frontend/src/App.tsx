import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ExampleComponent'
import ExampleComponent from "./components/ExampleComponent";


function App() {
  return (
    <div className="App">
        <ExampleComponent>
            Hello!
        </ExampleComponent>
    </div>
  );
}

export default App;
