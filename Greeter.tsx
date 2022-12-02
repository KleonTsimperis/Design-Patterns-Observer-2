import { useState, useEffect } from 'react';
import { subscribe } from './pubsub';
import * as React from 'react';

const GreeterComponent = () => {
  const [greeting, setGreeting] = useState('Hello World!');

  useEffect(() => {
    const handle = subscribe('kleonEvent', function (eventDetail) {
      // this event is generated by CustomEvent and that's why it has the detail property
      setGreeting(`Hello ${eventDetail}`);
    });

    return function cleanup() {
      handle();
    };
  });

  return <h1>{greeting}</h1>;
};

export default GreeterComponent;