class Review {
    constructor() {
        this.dao = require('./dao');
    }

    consultar (req, res, next) {
        var user = req.params.username
        var repo = req.params.repo

        if(!user || !repo){
            return next(new Error('campos obrigatorios não preenchidos'));
        }

        this.dao.findByUsernameAndRepo(user, repo, (err, data) => {

            if (err || !data) {
                return res.status(404).json({message: 'review não encontrado'})
            }

            var {review, stars} = data

            res.status(200).json({
                review,
                stars
            })
        })
    }

    gravar (req, res, next) {
        var username = req.body.username
        var repo = req.body.repo
        var stars = req.body.stars
        var review = req.body.review

        if(!username || !repo || !stars || !review) {
            return next(new Error('campos obrigatorios não preenchidos'));
        }

        var data = {
            username,
            repo,
            stars,
            review
        }

        this.dao.insertOrUpdate(data, (err, data) => {

            if (err) {
                return res.status(404).json({message: 'falha ao buscar os reviews'})
            }

            res.status(200).json({message: 'review atualizado com sucesso'})
        })
    }
}

module.exports = new Review()