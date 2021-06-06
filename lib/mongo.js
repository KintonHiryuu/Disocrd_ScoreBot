const mongoose = require('mongoose')
const {mongodbPath} = require('../gitignore/config.json')

module.exports = async () => {
    await mongoose.connect(mongodbPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return mongoose
}