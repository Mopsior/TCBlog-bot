module.exports = {
    name: 'clear',
    description: 'Komenda clear!',
    execute(message, args, Discord) {
        if (!args[0]) return message.channel.send('⛔ Nie podałeś Argumentów!')
        if (!message.member.hasPermission('MANAGE_MESSAGES') || !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('⛔ Nie masz permisji! Wymagana to `MANAGE_MESSAGES` lub `ADMINISTRATOR`')
        if (args[0] >= 1 && args[0] <= 100) return message.channel.send('test')

        const delAmount = args[0]
        message.channel.bulkDelete(delAmount)
        const embed = new Discord.MessageEmbed()
        .setColor('#43b581')
        .setTitle("Usunięto Wiadomości! ✅")
        .setDescription('🛠️ Usunałem **' + args[0] + '** wiadomości!')
        .setFooter(message.author.tag, message.author.avatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}