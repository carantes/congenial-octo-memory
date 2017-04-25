var bluebird = require('bluebird');

class ReviewDAO{
  constructor(){
    this.model = require('./model');
  }

  findByUsername(username, cb){
    let criteria = {
      username: username
    }

    this.model.findOne(criteria, cb);
  }

  insertOrUpdate(data, cb){
    
    let criteria = {
      username: data.username
    }

    this.model.findOneAndUpdate(criteria, data, {upsert:true, new: true}, cb);
  }

}

module.exports = bluebird.promisifyAll(new ReviewDAO());
