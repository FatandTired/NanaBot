const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {
  name: "userperms",  //////Nombre del comando
  alias: ['userpermissions', 'permisos', 'perms', 'permissions'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    const guild = message.guild;
    const member = message.mentions.members.first() || guild.members.cache.get(args[0]) ||message.member;
  
  const e1 = new Discord.MessageEmbed()
  .setColor('36393F')
  .setThumbnail(member.user.displayAvatarURL())
  .addField('**PERMISOS:**', [
      `**Permisos de ${member.user.username}:**\n ${member.permissions.toArray().length ? member.permissions.toArray().map(perms => `\`${perms}\``).join('**|** ') : "Sin permisos"}`
  ])
  .setFooter(`Pedido por: ${message.author.username} `)

  message.channel.send(e1)
 }
    
}