const { Officer } = require('../models')
module.exports = {

    async index(req, res) {
        try {
            const officers = await Officer.findAll()
            res.send(officers)
        } catch (err) {
            res.status(500).send({
                error: 'The Officer information was incorrect'
            })
        }
    },
    // create 
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const officer = await Officer.create(req.body)
            res.send(officer.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Officer incorrect'
            })
        }
    },
    // edit
    async put(req, res) {
        try {
            await Officer.update(req.body, {
                where: {
                    id: req.params.officerId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Officer incorrect'
            })
        }
    },
    
// delete 
async remove(req, res) {
        try {
            const officer = await Officer.findOne({
                where: {
                    id: req.params.officerId
                }
            })
            if (!officer) {
                return res.status(403).send({
                    error: 'The Officer information was incorrect'
                })
            }
            await officer.destroy()
            res.send(officer)
        } catch (err) {
            res.status(500).send({
                error: 'The Officer information was incorrect'
            })
        }
    },
    // get Officer by id
    async show(req, res) {
        try {
            const officer = await Officer.findByPk(req.params.officerId)
            res.send(officer)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The Officer information was incorrect'
            })
        }
    }
}
