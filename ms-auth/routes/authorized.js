const comments = require('./comments');
const members = require('./members');

// these routes require authorized jwt token
module.exports = (router) => {
  comments(router);
  members(router);
  return router;
};