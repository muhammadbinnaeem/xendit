const Member = require('../models/members');

module.exports = {
  getMembersByOrgName: (req, res) => {
        const { org_name } = req.params;
        // find members by org_name with sort by followers
        // lean is used for returning simple object instead of moongoose object
		    Member.find({ org_name }).lean().sort({'followers': -1})
        .then(members => {
            members = members.map(function(member) {
            member.followers_count = member.followers.length;
            member.following_count = member.following.length;
            // hide password in response
            delete member.password;
            return member;
          });
          res.status(200).send(members)
        });
  }
}