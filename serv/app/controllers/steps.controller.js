const db = require('../models')
const steps = db.steps
const OP = db.Sequelize.Op

exports.findAll = (req, res) => {
    steps.findAll()
    .then(data => {
        res.send(data)
    })
}
exports.create = (req, res) => {
    //console.log(req.body)
    steps.create(req.body)
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
    steps.findByPk(id)
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
    steps.destroy({
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
    steps.update(req.body, {
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
