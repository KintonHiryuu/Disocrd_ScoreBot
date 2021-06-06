const discord = require("discord.js")
const mongo = require("./mongo")
const channelsScheme = require("../src/mongoscheme/channels.json")
module.exports = {
    /**
     * 
     * @param {object} bot Bot client
     * @param {object} guild guild from which the user leveled up
     * @param {object} user the user who just ranked
     */
    async execute(bot, guild, user) {
        await mongo().then(mongoDB => {
            try {

            }
            finally {
                mongoDB.connection.close()
            }

        })

    }
}