import { routes } from './routes';

const appRoot = document.getElementById('app');

window.onpopstate = () => {
  appRoot.innerHTML = routes[window.location.pathname];
};

window.onClick = (pathname: string) => {
  window.history.pushState({}, pathname, `${window.location.origin}${pathname}`);
  appRoot.innerHTML = routes[pathname];
};

appRoot.innerHTML = routes[window.location.pathname];
