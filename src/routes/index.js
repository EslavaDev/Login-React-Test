import { NoLogin, withAuthentication } from './authRoutes';
import LazyLoad from './laziLoad';
import Login from '../views/Login';

export default [
  {
    path: '/login',
    component: NoLogin(LazyLoad(()=> import('../views/Login'))),
    exact: true,
  },
  {
    path: '/',
    component: withAuthentication(LazyLoad(()=> import('../views/prueba'))),
    exact: true,
  },
];