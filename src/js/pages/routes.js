import App from '../app';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./pages/Main')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
  ]
};
