import React, { useState, useEffect } from 'react';
import * as api from '../../api';

type Props = {};

const ExampleTwo: React.SFC<Props> = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(`You clicked ${count} times`)
  }, [count]);

  useEffect(() => {
    api.subscribe(time, setTime);
    return () => {
      api.unsubscribe(setTime);
    }
  });

  return (
    <div>
      <p>Current time: {time}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1 )}>
        Click me
      </button>
    </div>
  );
}

export default ExampleTwo;
