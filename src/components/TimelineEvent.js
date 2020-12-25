import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div>
      <h4>{props.TimelineEvent.person}</h4>
      <h4>{props.TimelineEvent.status}</h4>
      {Timestamp()}
    </div>
  );
};

export default TimelineEvent;


// For wave 1 implement the TimelineEvent component function. It should take 3 props.

// person - the person making the post.
// status - the message being posted.
// timestamp - the date-time of the event.
// Test the component by rendering it with hardcoded data inside the App component. TimelineEvent should use the existing Timestamp component to render the time & date of the event.