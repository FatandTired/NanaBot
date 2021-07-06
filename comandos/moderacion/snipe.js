const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')
module.exports = {
  name: "snipe", 
  alias: ['sp'], 

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    const channel = message.mentions.channels.first() || message.channel;
    const snipes = client.snipes.get(channel.id)
	if(!snipes) return message.channel.send('Nada que mostrar')
    const snipe = +args[0] - 1 || 0;
    const target = snipes[snipe]
    if(!target) return message.channel.send(`Solo hay ${snipes.length} mensajes`)
    
    const { msg, time, image } = target;
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setDescription(msg.content)
    .setImage(image)
    .setFooter(`${snipe + 1}/${snipes.length} | ${moment(time).fromNow()}`)
    .setColor('2f3136')
    message.channel.send(embed)
    
    
    
 }

} 