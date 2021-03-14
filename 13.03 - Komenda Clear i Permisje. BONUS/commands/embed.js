module.exports = {
    name: 'embed',
    description: 'Komenda do wysyłania embedów!',
    execute(message, args, Discord) {
        if (!args[0]) return message.channel.send('⛔ Nie podałeś Argumentów!')

        const msgText = [...args].join(" ")
        const embed = new Discord.MessageEmbed()
        .setTitle('Przykładowy Embed')
        .setDescription(msgText)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor('#43b581')
        message.channel.send(embed)
    }
}