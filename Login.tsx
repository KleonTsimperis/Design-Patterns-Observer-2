import { publish } from './pubsub';
import * as React from 'react';

const LoginComponent = () => {
  function login() {
    publish('kleonEvent', 25);
  }

  return (
    <div>
      <p>Welcome</p>
      <button onClick={login}>Sign in</button>
    </div>
  );
};

export default LoginComponent;
