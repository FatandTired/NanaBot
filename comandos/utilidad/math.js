const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')
const m = require('mathjs')
module.exports = {
  name: "math",  //////Nombre del comando
  alias: ['calcular'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
  try {
  const e1 = new Discord.MessageEmbed()
  .setColor('36393F')
  .addField('Operacion', `\`\`\`${args.join(' ')}\`\`\``)
  .addField('Solucion', `\`\`\`${m.evaluate(args.join(' '))}\`\`\``)
  

  message.channel.send(e1)
  } catch (err) {
      message.channel.send('Tu operacion no es valida')
  }
 }
    
}