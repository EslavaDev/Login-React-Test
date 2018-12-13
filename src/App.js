import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';
import routes from './routes';
import { isAuthenticated } from './routes/authRoutes';

import './App.css';
import Error from './views/Error/containers';

const App = () => (
  <div >

    {
      (isAuthenticated()) ? (
        <Header as="h1" textAlign="left" style={{ backgroundColor: 'red' }}>
          <Icon name="users" circular />
          <Header.Content>Friends</Header.Content>
        </Header>
        
        ) :''
      }
  <div className="container">
  <Switch >
    {
      routes.map(route => (
        <Route key={route.path} {...route} />
        ))
      }
   
      <Route component={Error} />
      </Switch>
      </div>
      </div>
);

export default App;
