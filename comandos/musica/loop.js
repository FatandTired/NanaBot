const Discord = require('discord.js');
const client = new Discord.Client();
const distube = require('distube')
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "loop",  //////Nombre del comando
  alias: ['l'], ///////alias del comando

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
    let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Playlist en repeticion" : "Cancion en repeticion" : "Off";
        message.channel.send("Modo de repeticion: `" + mode + "` **Vuelve a usar el comando para cambiar de modo de repeticion**");

 }

}