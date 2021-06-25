module.exports = {
    name: 'say',
    description: 'say a sentence',
    aliases: [],
    usage: "<sentence>",
    execute:(message, client, args) => {
        const whattosay = message.content.slice("".length).trim().split(/ +/);
whattosay.shift().toLowerCase().split(" ")[0]
message.channel.send(whattosay.join(" "))
    },
};