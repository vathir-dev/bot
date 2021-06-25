const fs = require('fs');
const token = "ODU3NjI5MTA4NTQwNDA3ODA4.YNSXWQ.B6Ob2V-oJFHMMvJHiOV0ghpXD9I"

const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
	const eventHandler = require('./handler/eventHandler.js');
	eventHandler(err, files, client);
});
fs.readdir('./commands/', (err, files) => {
	const commandHandler = require('./handler/commandHandler.js');
	commandHandler(err, files, client);
});
client.login(token);