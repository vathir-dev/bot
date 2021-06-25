const config = require("./../utils/config.json")

module.exports = {
	event: 'ready',
	once: true,
	run(client) {
		console.log(`bot ${client.user.tag} sudah nyala!`);
		client.user.setActivity(config.prefix + "help", {type:"LISTENING"})
	},
};