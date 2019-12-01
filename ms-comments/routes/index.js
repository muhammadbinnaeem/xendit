const comments = require('./comments');
// Comments routing
module.exports = (router) => {
  comments(router);
  return router;
};