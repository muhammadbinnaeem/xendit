const members = require('./members');
// Members routing
module.exports = (router) => {
  members(router);
  return router;
};