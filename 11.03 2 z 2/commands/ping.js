module.exports = {
    name: 'ping',
    description: 'Komenda ping!',
    execute(message, args) {
        message.channel.send('Pong')
    }
}