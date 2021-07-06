const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')
const figlet = require('figlet')

module.exports = {
  name: "ascii",//////Nombre del comando
  alias: [], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const set = new db.crearDB('ignorecommands')
    const off = new db.crearDB('offed')
    const server = message.guild.id
    let verificaroff = off.some(server, (v) => v == message.member.id)
    if(verificaroff) return;
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    
    if(!args[0]) return message.channel.send('Introduce el texto')
    msg = args.join(" ");
    
    figlet.text(msg, function (err, data){
      if(err){
          message.channel.send('No se pudo convertir el texto')
          console.dir(err)
      }
        if(data.length > 1500) return message.channel.send('El texto debe ser de 1500 caracteres o menos')
        
        message.channel.send('```' + data + '```')
    })
 }
    
}