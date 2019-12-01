const controller = require('../controllers/members');

module.exports = (router) => {
  // GET Request for getting organization members
  router.route('/orgs/:org_name/members')
    .get(controller.getMembersByOrgName);
};