const controller = require('../controllers/comments');

module.exports = (router) => {
  // POST request for add comment
  router.route('/orgs/:org_name/comments')
    .post(controller.addComment);
  // GET request for get comments
  router.route('/orgs/:org_name/comments')
    .get(controller.getComments);
  // DELETE request for soft delete comments
  router.route('/orgs/:org_name/comments')
    .delete(controller.deleteComments);
};