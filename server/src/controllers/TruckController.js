const { Truck } = require('../models')
module.exports = {

    async index(req, res) {
        try {
            const trucks = await Truck.findAll()
            res.send(trucks)
        } catch (err) {
            res.status(500).send({
                error: 'The Truck information was incorrect'
            })
        }
    },
    // create 
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const truck = await Truck.create(req.body)
            res.send(truck.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create truck incorrect'
            })
        }
    },
    // edit
    async put(req, res) {
        try {
            await Truck.update(req.body, {
                where: {
                    id: req.params.truckId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Truck incorrect'
            })
        }
    },
    
// delete 
async remove(req, res) {
        try {
            const truck = await Truck.findOne({
                where: {
                    id: req.params.truckId
                }
            })
            if (!truck) {
                return res.status(403).send({
                    error: 'The Truck information was incorrect'
                })
            }
            await truck.destroy()
            res.send(truck)
        } catch (err) {
            res.status(500).send({
                error: 'The Truck information was incorrect'
            })
        }
    },
    // get Truck by id
    async show(req, res) {
        try {
            const truck = await Truck.findByPk(req.params.truckId)
            res.send(truck)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The Truck information was incorrect'
            })
        }
    }
}
