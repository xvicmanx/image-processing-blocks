import React from 'react';
import { Route } from 'react-router';
import Editor from './containers/screens/Editor';
import Home from './containers/screens/Home';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/edit" component={Editor} />
    </div>
  );
};

export default Routes;
