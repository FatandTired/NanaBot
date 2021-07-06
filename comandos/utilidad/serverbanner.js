const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "serverbanner",  //////Nombre del comando
  alias: ['banner'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
	if(!message.guild.bannerURL()) return message.channel.send('Este servidor no tiene banner')
    const embed = new Discord.MessageEmbed()
    .setTitle(`Banner de ${message.guild.name}`)
    .setImage(message.guild.bannerURL({ size: 2048 }))
    .setColor('36393F')
    message.channel.send(embed)
 }
 
}