const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {
  name: "userroles",  //////Nombre del comando
  alias: ['roles'], ///////alias del comando

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
     const trimArray = (arr, maxLength = 30) => {
            if (arr.length > maxLength) {
                const len = arr.length - maxLength;
                arr = arr.slice(0, maxLength);
                arr.push(` and ${len} more roles...`);
            }
            return arr;
        }
    const roles = member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1);
  const e2 = new Discord.MessageEmbed() 
  .setColor('36393F')
  .setThumbnail(member.user.displayAvatarURL())
  .addField(`**ROLES:**`, [
            `**Total:**` + `\`${member.roles.cache.size}\``, `**Roles de ${member.user.username}:**\n`,
             `${roles.length < 30 ? roles.join(", ") : roles.length > 30 ? trimArray(roles).join(", ") : "Ninguno"}`
    ])
  .setFooter(`Pedido por: ${message.author.tag} `)
  
  message.channel.send(e2)
 
  }
}