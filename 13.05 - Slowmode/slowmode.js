const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'slowmode',
    description: 'Komenda do ustawiania slowmode',
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('⛔ Nie masz permisji! Wymagana to `MANAGE_CHANNELS`')
        if (!args[0]) return message.channel.send('⛔ Nie dałeś czasu (w sekundach)')
        if (isNaN(args[0])) return message.channel.send('⛔ To nie liczba!')
        if (args[0] < 0) return message.channel.send('⛔ Nie możesz ustawić cooldown na minusie!')


        const newEmbed = new MessageEmbed()
            .setColor('#00ff00')
            .setDescription('Ustawilem slowmode kanału na `'+args[0]+'`')
            .setTitle('Zmiana slowmode')
            .setFooter(message.author.tag, message.author.avatarURL())
        message.channel.send(newEmbed)
        message.channel.setRateLimitPerUser(args[0])
    }
}