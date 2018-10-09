import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Icon, Grid, Menu } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import routes from './routes/index';

const App = () => (
  <div className="App">
    {
    (localStorage.getItem('token')) && (
      <div>
        <Header as="h1" textAlign="left" style={{backgroundColor: 'red'}}>
          <Icon name="users" circular />
          <Header.Content>Friends</Header.Content>
        </Header>
      </div>
    )}

    {
      routes.map(route => (
        <Route key={route.path} {...route} />
      ))
    }
  </div>
);

export default App;
