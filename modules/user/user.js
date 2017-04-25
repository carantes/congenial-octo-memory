class User {
    constructor() {
        this.github = require('../../services/github')
    }

    getUserRepos(req, res, next) {
        var user = req.params.username

        if(!user){
            return next(new Error('campos obrigatorios não preenchidos'));
        }

        this.github.getUserRepos(user, function (err, data) {

            if (err) {
                return res.status(404).json({message: 'username não encontrado'})
            }

            var repos = []

            data.forEach(function(item) {
                var repo = {
                    id: item.id,
                    name: item.name,
                    language: item.language,
                    stars: item.stargazers_count
                }

                repos.push(repo)
            }, this);

            res.status(200).json(repos)
        });
    }
}

module.exports = new User()