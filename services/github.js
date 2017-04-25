var bluebird = require('bluebird');

class Github {
    constructor() {
        this.request = require('request');
    }

    getUserRepos(username, callback) {
        
        if (!username) {
            error = new Error('username não informado')
            return callback(error, null); 
        }

        var options = {
            url: `https://api.github.com/users/${username}/repos`,
            headers: {
                'User-Agent': 'request'
            },
			timeout: 8000
        };

        this.request(options, (error, response, body) => {
            if (error) {
                return callback (error)
            }

            if (response && response.statusCode === 200) {
                return callback(null, JSON.parse(body))
            }
            else {
                error = new Error('username não encontrado')
                return callback(error, null); 
            }
        })      
    }
}

module.exports = bluebird.promisifyAll(new Github());