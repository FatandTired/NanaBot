const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "say", 
  alias: ['Say', 'decir'], 

execute (client, message){
  if(message.author.bot) return;
  let id = ["752336035228418059", "707676365540950018", "826289032904048661", "823045423740354570"]
  if(!id.includes(message.author.id)) return message.channel.send('El comando esta bloqueado, si lo necesitas contacta a un soporte de nana')
  const args = message.content.slice(0).trim().split(/ +/g);
  let script = args.slice(1).join(' ');
  if (!script) return;
  message.delete()
  message.channel.send(script)

 }

}