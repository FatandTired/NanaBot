const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {
  name: "avatar",  //////Nombre del comando
  alias: ['pfp', 'foto'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    const guild = message.guild;
    const member = message.mentions.members.first() || guild.members.cache.get(args[0]) ||message.member;
  
  const e1 = new Discord.MessageEmbed()
  .setColor('36393F')
  .setTitle(`Avatar de ${member.user.username}`)
  .setImage(member.user.displayAvatarURL({ size: 1024, dynamic: true }))
  .setFooter(`Pedido por ${message.member.displayName}`, member.user.displayAvatarURL({ dynamic: true }))

  message.channel.send(e1)
 }
    
}