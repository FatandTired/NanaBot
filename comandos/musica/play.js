const Discord = require('discord.js');
const client = new Discord.Client();
const distube = require('distube')
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "play",  //////Nombre del comando
  alias: ['p', 'reproducir'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    if(!message.member.voice.channel) return message.channel.send('Debes estar en un canal de voz')
    const cancion = args.join(" ")
    const serverQueue = client.distube.getQueue(message)
    if(!cancion) return message.channel.send('Debes escribir el nombre o enlace de una cancion o playlist')
    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Debes estar en el mismo canal que nana')

    client.distube.play(message, cancion).catch(err =>{
        message.channel.send(`${err}`)
    })

    

    
  
 }

}