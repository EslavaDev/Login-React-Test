import { NoLogin, withAuthentication } from './authRoutes';
import LazyLoad from './laziLoad';
import Login from '../views/NoAuth/Container';
import ErrorComponent from '../views/Error/containers'

const Rutas = [
  {
    path: '/login',
    component: NoLogin(Login),
    exact: true,
  },
  {
    path: '/',
    component: withAuthentication(LazyLoad(()=> import('../views/prueba'))),
    exact: true,
  },
];

export default Rutas;
