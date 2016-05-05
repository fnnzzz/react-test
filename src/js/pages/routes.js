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
      path: "*",
      getComponent: (location, callback) => {
        require.ensure([], require => {
          callback(null, require("./Main").default)
        })
      },
      path: "about",
      getComponent: (location, callback) => {
        require.ensure([], require => {
          callback(null, require("./About").default)
        })
      }
    },
  ]
};