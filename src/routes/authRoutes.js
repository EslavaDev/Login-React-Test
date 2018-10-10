import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import decode from 'jwt-decode';

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  let isValid = false;
  try {
    isValid = decode(token);
  } catch (error) {
    return true;
  }
  return isValid;
};

export const Private = props => (
  isAuthenticated()
    ? <Route {...props} />
    : <Redirect to="/login" />
);
export const withAuthentication = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    if (!isAuthenticated()) {
      return <Redirect to="/login" />;
    }
    return (<WrappedComponent {...props} />);
  };
  return WithAuthentication;
};

export const NoLogin = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    if (!isAuthenticated()) {
      return (<WrappedComponent {...props} />);
    }
    return <Redirect to="/" />;
  };
  return WithAuthentication;
};
