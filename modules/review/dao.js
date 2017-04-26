var bluebird = require('bluebird');

class ReviewDAO{
  constructor(){
    this.model = require('./model');
  }

  findByUsernameAndRepo(username, repo, cb){
    let criteria = {
      username,
      repo
    }

    this.model.findOne(criteria, cb);
  }

  insertOrUpdate(data, cb){
    
    let criteria = {
      username: data.username,
      repo: data.repo
    }

    this.model.findOneAndUpdate(criteria, data, {upsert:true, new: true}, cb);
  }

}

module.exports = bluebird.promisifyAll(new ReviewDAO());
