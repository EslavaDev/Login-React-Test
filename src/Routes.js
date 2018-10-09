import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/main.layout';
import EmptyLayout from './layouts/empty.layout';
import { Private, Public } from './routes/index';

const Routes = () => (
  <Switch />
);

export default Routes;
