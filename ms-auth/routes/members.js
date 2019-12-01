// request-promise-native is used for passing request from one server to another
const request = require('request-promise-native')

module.exports = (router) => {
  router.route('/:org_name/members').get(async (req, res) => {
    const { org_name } = req.params;
    // other container uri where members functionality exists
    const uri = `http://ms-members:8080/api/v1/orgs/${org_name}/members`
    // this route will redirect request to members microservice and give response accordingly
   await request(uri,{json:true}).then(result => res.send(result))
    .catch(err => res.status(err.statusCode).send(err))
  });
};