const auth = require('./auth');

module.exports = (router) => {
  auth(router);
  return router;
};