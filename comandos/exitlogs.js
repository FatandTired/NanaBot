const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const set = new db.crearDB('exitlogs')
module.exports = {
  name: "exitlogs", 
  alias: ['salida'], 

execute (client, message, args){
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
  const set1 = new db.crearDB('ignorecommands')

  const canal = message.mentions.channels.first() || client.channels.cache.get(args[1]) || message.channel;    
  const accion = args[0];
  var perms = message.member.hasPermission('MANAGE_GUILD')
  if(!perms){

   const toggl = new db.crearDB('developers')
   let verificar4 = toggl.some('developers', (v) => v == message.author.id)
   if(!verificar4) return message.channel.send('Permiso faltante: `MANAGE_GUILD`')

    }
   if(!accion) return message.channel.send('Establece un parametro `set/del`')
   if(accion === 'set'){
       set.establecer(message.guild.id, canal.id)
       message.channel.send(`Se establecio el canal ${canal}`)
   }
   if(accion === 'del'){
       if(!set.tiene(message.guild.id)) return message.channel.send('No hay canal de exitlogs establecido')
       set.eliminar(message.guild.id)
       message.channel.send(`Se elimino el canal ${canal}`)
   }

 }

}