const Discord = require('discord.js');
const client = new Discord.Client();
const distube = require('distube')
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "queue",  //////Nombre del comando
  alias: ['playlist', 'lista', 'list'], ///////alias del comando

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

     let queue = client.distube.getQueue(message);
     
     const embed1 = new Discord.MessageEmbed()
     .setDescription('**Playlist Actual:**\n' + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
     .setColor('F83BD5')
     const embed2 = new Discord.MessageEmbed()
     .setDescription('**Playlist Actual:**\n' + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(10, 20).join("\n"))
     .setColor('F83BD5')

      message.channel.send(embed1).then(msg => {
        msg.react('◀️')
        msg.react('▶️')
        msg.react('❌')
      
      msg.awaitReactions((reaction, user) => {
      
      if(message.author.id !== user.id) return;
      if(reaction.emoji.name === '◀️'){
        msg.edit(embed1)  
        reaction.users.remove(user.id)
      }
      if(reaction.emoji.name === '▶️'){
        msg.edit(embed2)
        reaction.users.remove(user.id)
      }
      if(reaction.emoji.name === '❌'){
        msg.delete() 
      }
    })

  }) 
 }

}