import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData);
  const timelineEventList = [
    {
      person: 'Adele Goldberg',
      status: 'In Smalltalk, everything happens somewhere else.'
      // ,
      // timestamp:
    },
    {
      person: 'Erica Baker',
      status: 'Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It is up to you to see it. Pay attention.'
      // ,
      // timestamp:
    },
    {
      person: 'Aubrey Tang',
      status: 'The art of computer programming is a blend of mathematics and poetry.'
      // ,
      // timestamp:
    }
  ];
  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        
      </main>
    </div>
  );
}

export default App;
