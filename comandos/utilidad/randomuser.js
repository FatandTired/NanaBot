const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {
  name: "userrandom",  //////Nombre del comando
  alias: ['randomuser', 'randommember', 'memberrandom'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
  let randomPer = message.guild.members.cache.random().user;
  
    const embed = new Discord.MessageEmbed()
    .setTitle('Miembro random')
    .setThumbnail(randomPer.displayAvatarURL({ dynamic: true }))
    .setDescription('<@' + randomPer.id + '>')
    .addField(`\`${randomPer.tag}\``, '** **')
    .setFooter(`Pedido por ${message.member.displayName}`, message.member.user.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)

 }
    
}