const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')

const prefix = '!'
const token = 'Twój Token'

client.once('ready', () => {
    console.log('Bot jest gotowy!')
})

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args)
    }
    else if (command === 'say') {
        client.commands.get('say').execute(message, args)
    }
    else if (command === 'embed') {
        client.commands.get('embed').execute(message, args, Discord)
    }
    else if (command === 'clear') {
        client.commands.get('clear').execute(message, args, Discord)
    }
})


client.login(token)

client.on('debug', () => {})
client.on('warn', msg => {
    client.log(info)
})
client.on('error', () => {})