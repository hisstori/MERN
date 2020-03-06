import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <form>
          <label>
            ==New Book Entry==
            Title: <input type='text' title='title'/> 
            isbn: <input type='text' isbn='isbn'/>
            Page Count:  <input type='number' pageCount='Page Count'/>
            Description: <input type='text' description='Description'/>
            Categories: <input type='text' categories='Categories'/>
          </label>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
