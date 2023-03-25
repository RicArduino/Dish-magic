const db = require('../models')
const ingredient = db.ingredient
const OP = db.Sequelize.Op

exports.findAll = (req, res) => {
    ingredient.findAll()
    .then(data => {
        res.send(data)
    })
}
exports.create = (req, res) => {
    //console.log(req.body)
    ingredient.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(e => {
            res.status(500).send({
                message: 'Could not insert into the table'
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    ingredient.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: 'Could not find the data'
        })
    })
}
exports.delete = (req, res) => {
    const id = req.params.id
    ingredient.destroy({
        where: {id : id}
    })
    .then( num => {
        if(num == 1 ){
            res.send({
                message: 
                    err.message
            })
        }else {
            res.send({
                message: "Could not delete"
            })
        }
    })
    .catch(e => {
        res.status(500).send({
            message: 'Database error'
        })
    })
}
exports.update = (req, res) => {
    const id = req.params.id
    ingredient.update(req.body, {
        where: {id: id}
    })
    .then( num => {
        if(num == 1 ){
            res.send({
                message: 
                    err.message
            })
        }else {
            res.send({
                message: "Could not update"
            })
        }
    })
    .catch(e => {
        res.status(500).send({
            message: 'Database error'
        })
    })
}
