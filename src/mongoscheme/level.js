const mongoose = require("mongoose")

module.exports = mongoose.model('usersLevel', mongoose.Schema({
    id: { type: String, required: true },
    guild: { type: String, required: true },
    messages: { type: Number, required: true, default: 0 },
    chars: { type: Number, required: true, default: 0 },
    points: { type: Number, required: true, default: 0 },
    levels: { type: Number, default: 0 }

}))