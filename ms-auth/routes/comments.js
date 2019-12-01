const request = require('request-promise-native')


module.exports = (router) => {
  router.route('/:org_name/comments').post(async (req, res) => {
    const { org_name } = req.params;
    // comments container uri POST request
    const uri = `http://ms-comments:8080/api/v1/orgs/${org_name}/comments`
    // this route will redirect POST request to comments microservice
    // and give response accordingly
    await request.post(uri,{body:req.body,json:true}).then(result => res.send(result))
    .catch(err => res.status(err.statusCode).send(err))
  });

  router.route('/:org_name/comments').get(async (req, res) => {
    const { org_name } = req.params;
    // comments container uri GET request
    const uri = `http://ms-comments:8080/api/v1/orgs/${org_name}/comments`
    // this route will redirect GET request to comments microservice
    // and give response accordingly
    await request.get(uri,{json:true}).then(result => res.send(result))
    .catch(err => res.status(err.statusCode).send(err))
  });
  
  router.route('/:org_name/comments').delete(async (req, res) => {
    const { org_name } = req.params;
    // comments container uri DELETE request
    const uri = `http://ms-comments:8080/api/v1/orgs/${org_name}/comments`
    // this route will redirect DELETE request to comments microservice 
    // and give response accordingly
    await request.delete(uri,{json:true}).then(result => res.send(result))
    .catch(err => res.status(err.statusCode).send(err));
  });
};