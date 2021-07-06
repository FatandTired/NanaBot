const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "servericon",  //////Nombre del comando
  alias: ['icon'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    if(!message.guild.iconURL()) return message.channel.send('Este servidor no tiene icono')
    const embed = new Discord.MessageEmbed()
    .setTitle(`Icono de ${message.guild.name}`)
    .setColor('36393F')
    .setImage(message.guild.iconURL({ size: 1024, dynamic: true }))
    message.channel.send(embed)
 }
 
}