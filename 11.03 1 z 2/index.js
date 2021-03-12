const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = '!'
const token = 'Twój token'

client.once('ready', () => {
    console.log('Bot jest gotowy!')
})

client.commands = new Discord.Collection()

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).toLowerCase().split(/ +/);
    const command = args.shift().toLowerCase()

    if (command === 'ping') {
        message.channel.send('Pong')
    }
    else if (command === 'say') {
        if (!args[0]) return message.channel.send('⛔ Nie podałeś Argumentów!')

        const msgText = [...args].join(" ")
        message.channel.send(msgText)
    }
})


client.login(token)

client.on('debug', () => {})
client.on('warn', msg => {
    client.log(info)
})
client.on('error', () => {})