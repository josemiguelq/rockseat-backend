const Spot = require('./../models/Spot')
const Booking = require('./../models/Booking')
module.exports = {
    async store(req, res) {
        const {spot_id} = req.params
        const {date} = req.body
        const {user_id} = req.headers
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        })
        return res.json(booking)
    }
}
