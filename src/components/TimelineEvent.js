import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const person = props.person;
  const status = props.status;
  // const time = <Timestamp time={props.Timestamp}/>;
  const time = <Timestamp time={props.timeStamp}/>;

  // const key = <Timestamp time={props.Timestamp}/>;
  return (
    <div className="timeline-event">
      <p className="event-person">{person}</p>
      <p className="event-status">{status}</p>
      <p className="event-time">{time}</p>
      {/* <p className="key">{key}</p> */}
    </div>
  );
};

export default TimelineEvent;


// For wave 1 implement the TimelineEvent component function. It should take 3 props.

// person - the person making the post.
// status - the message being posted.
// timestamp - the date-time of the event.
// Test the component by rendering it with hardcoded data inside the App component. TimelineEvent should use the existing Timestamp component to render the time & date of the event.