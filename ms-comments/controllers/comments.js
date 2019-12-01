const Comment = require('../models/comments');


module.exports = {
  addComment: (req, res) => {
		  const { comment } = req.body;
      const { org_name } = req.params;
      const commentObject = new Comment({ comment, org_name }); 
      commentObject.save()
      .then((comment) => res.status(200).send(comment)).catch(error => {
          handleError(error,res);
      });
  },
  getComments: (req, res) => {
        const { org_name } = req.params;
		    Comment.find({ org_name })
        .then(comments => res.status(200).send(comments))
        .catch(error => {
          handleError(error,res);
      });
  },
  deleteComments: (req, res) => {
        const { org_name } = req.params;
		    Comment.delete({ org_name })
        .then(comments => res.status(200).send(comments))
        .catch(error => {
          handleError(error,res);
      });
  }
}
// Error and response handling
function handleError(error,res){
  let response = {};
  let statusCode = 500;
  if(error){
    response = error;
    if(error.name == "ValidationError"){
      statusCode = 422;
    }
  }
  res.status(statusCode).send(response);
}