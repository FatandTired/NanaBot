const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const set = new db.crearDB('ignorecommands')

module.exports = {
  name: "ignorecommands", 
  alias: ['ignore'], 

execute (client, message, args){
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;  const accion = args[0];
  if(message.author.id !== message.guild.ownerID){

   const toggl = new db.crearDB('developers')
   let verificar4 = toggl.some('developers', (v) => v == message.author.id)
   if(!verificar4) return message.channel.send('Solo el propietario del server puede user este comando')

    }
   if(!accion) return message.channel.send('Establece un parametro `on/off`')
   if(accion === 'on'){
       if(set.tiene(server)) return message.channel.send('Los comandos ya estan activados')
       set.establecer(server, server)
       message.channel.send(`Apartir de ahora se ignoraran los comandos`)
   }
   if(accion === 'off'){
       if(!set.tiene(server)) return message.channel.send('Los comandos ya estan desactivados')
       set.eliminar(server)
       message.channel.send(`Se han activado los comandos correctamente`)
   }

 }

}