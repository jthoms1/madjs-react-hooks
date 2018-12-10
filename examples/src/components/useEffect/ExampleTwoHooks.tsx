import React, { useState, useEffect } from 'react';

type Props = {};

const ExampleTwo: React.SFC<Props> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log('You rendered again.')
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1 )}>
        Click me
      </button>
    </div>
  );
}

export default ExampleTwo;
