import React from 'react';
import TodoList from './TodoList'
import logo from './logo.svg';
import './App.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Apollo Link State Demo</h1>
  </header>
);

const App = () => (
  <div className="container-fluid">
    <Header/>
    <TodoList/>
  </div>
);

export default App;
