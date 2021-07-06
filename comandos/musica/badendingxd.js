
const Discord = require('discord.js');
const distube = require('distube')
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "afk",  //////Nombre del comando
  alias: [], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    if(!message.member.voice.channel) return message.channel.send('Debes estar en un canal de voz')
    const serverQueue = client.distube.getQueue(message)
    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return  message.channel.send('Debes estar en el mismo canal que nana')

    client.distube.play(message, 'https://www.youtube.com/watch?v=EG757bPPXZQ&t=441s')

 }

}