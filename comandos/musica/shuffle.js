const Discord = require('discord.js');
const client = new Discord.Client();
const distube = require('distube')
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "Shuffle",  //////Nombre del comando
  alias: ['shuffle'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const serverQueue = client.distube.getQueue(message)

    if(!message.member.voice.channel) return message.channel.send('Debes estar en un canal de voz')

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Debes estar en el mismo canal que nana')

    if(!serverQueue) return message.channel.send('No hay canciones en la playlist')

    client.distube.shuffle(message)
    const embed3 = new Discord.MessageEmbed()
     .setDescription(`Playlist en aleatorio`)
     .setColor('F83BD5')

    message.channel.send(embed3)

 }

}