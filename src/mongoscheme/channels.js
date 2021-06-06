const mongoose = require("mongoose")

module.exports = mongoose.model('channelsConfig', mongoose.Schema({
    _guild: { type: String, required: true },
    levelupChannel:{ type: String, required: false },
    levelupText:{ type: String, required: false, default: "-user- levelup ! He's now level -level-"}
}))