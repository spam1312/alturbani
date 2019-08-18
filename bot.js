const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("612730625027342338")
setInterval(function() {
channel.send(`الترراابين ملوووك الفزعاااات`);
}, 30)
})

client.login(process.env.BOT_TOKEN);