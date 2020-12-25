import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import Timestamp from './components/Timestamp';

function App() {
  console.log(timelineData);
  const timelineEventInfo = [
    {
      person: 'Adele Goldberg',
      status: 'In Smalltalk, everything happens somewhere else.'
      // ,
      // timestamp: {Timestamp()}
    },
    {
      person: 'Erica Baker',
      status: 'Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It is up to you to see it. Pay attention.'
      // ,
      // timestamp: {Timestamp()}
    },
    {
      person: 'Aubrey Tang',
      status: 'The art of computer programming is a blend of mathematics and poetry.'
      // ,
      // timeStamp: {Timestamp()}
    }
  ];
  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's social media feed</h1>
      </header>
      <main className="App-main">
      </main>
    </div>
  );
}

export default App;
