module.exports = {
	name: 'test2',
	description: 'Just a test command 2',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		message.reply('this is the test command 2');
	},
};