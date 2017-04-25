class Review {
    constructor() {
        this.dao = require('./dao');
    }

    consultar (req, res, next) {
        var user = req.params.username

        if(!user){
            return next(new Error('campos obrigatorios não preenchidos'));
        }

        this.dao.findByUsername(user, (err, data) => {

            if (err) {
                return res.status(404).json({message: 'falha ao buscar os reviews'})
            }

            res.status(200).json(data)
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