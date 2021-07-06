const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {
  name: "whitrole",  //////Nombre del comando
  alias: ['inrole'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    const guild = message.guild;
    const member = message.mentions.roles.first() || guild.roles.cache.get(args[0]);
  	if(!member) return message.channel.send('Especifica un rol o su id')
    
    const trimArray = (arr, maxLength = 30) => {
            if (arr.length > maxLength) {
                const len = arr.length - maxLength;
                arr = arr.slice(0, maxLength);
                arr.push(`${len} usuarios mas...`);
            }
            return arr;
        }
    
  const mem = message.guild.roles.cache.get(member.id).members.map(m => `${m}`);  
    
  const e1 = new Discord.MessageEmbed()
  .setColor('36393F')
  .setDescription(`**Usuarios con el rol**${member}\n` + `${mem.length < 30 ? mem.join(" **|** ") : mem.length > 30 ? trimArray(mem).join(" **|** ") : "Ninguno"}`)
  .setFooter('Pedido por' + message.member.user.tag, message.member.displayAvatarURL())

  message.channel.send(e1)
 }
    
}