const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const setchannel = new db.crearDB('WC')

module.exports = {
  name: "wchannel",  //////Nombre del comando
  alias: [], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('No tienes el permiso: `MANAGE_GUILD`')
    const id = args[0]
    if(!id) return message.channel.send('Pon un canal valido <3')

    const canal = message.mentions.channels.first() || client.channels.cache.get(id)
    if(!canal) return message.channel.send('Debes mencionar un canal')

    let serverchannel = message.guild.channels.resolve(canal.id)
    if(!serverchannel) return message.channel.send('Establece un rol que este dentro del servidor')
    
    setchannel.establecer(message.guild.id, canal.id)

    message.channel.send(`Se ha establecido el canal: **${canal.name}**, recuerda establecer la imagen y el texto de bienvenida `)
  
 }

}