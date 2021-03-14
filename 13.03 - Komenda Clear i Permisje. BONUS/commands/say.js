module.exports = {
    name: 'say',
    description: 'Komenda say!',
    execute(message, args) {
        if (!args[0]) return message.channel.send('⛔ Nie podałeś Argumentów!')

        const msgText = [...args].join(" ")
        message.channel.send(msgText)
    }
}