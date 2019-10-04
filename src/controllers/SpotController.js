const Spot = require('./../models/Spot')
module.exports = {
    async store(req, res) {
        const {filename} = req.file
        const {company, techs, price} = req.body
        const {user_id} = req.headers
        spot = await Spot.create({
            user: user_id,
            company,
            price,
            thumbnail: filename,
            techs: techs.split(',').map(tech => tech.trim())
        })
        return res.json(spot)
    },
    async index(req, res) {
        const { tech } =  req.query
        const spots = await Spot.find({techs: tech})
        return res.json(spots)
    }
}
