const mongo = require("../../lib/mongo")
const channelsScheme = require("../../src/mongoscheme/channels")
const { richEmbed } = require("discord.js")
module.exports = {
    name: "announcelevel",
    aliases: [],
    description: "Configure in which channel you want the bot to send the levelup announcements",
    category: "config",
    guildOnly: true,
    memberpermissions: "ADMINISTRATOR",
    adminPermOverride: true,
    cooldown: 2,
    args: true,
    usage: "<channelID> <text>",
    async run(client, message, args) {
        if(args.length < 1){
            message.channel.send(`Wrong usage ! you must say which channel you want the message to be sent it !\n Usage :\`\<#channelID> -user- just leveled up ! Now level -level-\`\nPlaceholders can be : \`-user-\` (replaced with the user mention) \`level\` (replaced with the user's level)`)
            return
        }
        console.log(args)
        let levelupChannel = getChannel(args.shift())
        if (!levelupChannel) {
            message.channel.send(`Wrong usage ! you must say which channel you want the message to be sent it !\n Usage :\`\<#channelID> -user- just leveled up ! Now level -level-\`\nPlaceholders can be : \`-user-\` (replaced with the user mention) \`level\` (replaced with the user's level)`)
            return
        }

        let levelupText = levelupText ? args.join(" ") : ""

        await mongo().then(mongoDB => {
            try {
                if (levelupText) {
                    new channelsScheme({
                        _guild: message.guild.id,
                        levelupChannel,
                        levelupText
                    }).save()
                } else {
                    new channelsScheme({
                        _guild: message.guild.id,
                        levelupChannel,
                    }).save()
                }

            }
            finally {
                mongoDB.connection.close()
            }

        })
    },
};


function getChannel(ID) {
    ID.replace(/[<!#> ]/g, "")
    if (isNaN(ID)) {
        return null
    }
    return ID
}