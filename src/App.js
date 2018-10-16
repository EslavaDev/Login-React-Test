import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';
import routes from './routes';
import { isAuthenticated } from './routes/authRoutes';

import './App.css';

const App = () => (
  <div className="container">
    {
    (isAuthenticated()) ? (
      <div>
        <Header as="h1" textAlign="left" style={{ backgroundColor: 'red' }}>
          <Icon name="users" circular />
          <Header.Content>Friends</Header.Content>
        </Header>
      </div>
    ) :''
  }

    {
      routes.map(route => (
        <Route key={route.path} {...route} />
      ))
    }
  </div>
);

export default App;
