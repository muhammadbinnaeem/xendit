const controller = require('../controllers/auth');

module.exports = (router) => {
  router.route('/login')
    .post(controller.login);
};