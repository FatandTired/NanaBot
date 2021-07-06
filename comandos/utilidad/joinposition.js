const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')
module.exports = {
  name: "joinposition",  //////Nombre del comando
  alias: ['jp'], ///////alias del comando

async execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||message.member;
    const members = message.guild.members.cache
    .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp)
    .array()
    const position = new Promise((ful) => {
        for (let i = 1; i < members.length + 1; i++){
            if(members[i - 1].id === member.id) ful(i)
        }
    })
    function formatDate (template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
      return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
      }, template)
    }
    message.channel.send(new Discord.MessageEmbed().setColor('36393F').setTitle('Join Position').setDescription(`${member} Tiene la posicion ${await position} en el server\n** **\nUnion al servidor: ${formatDate('DD/MM/YYYY HH:mm:ss', member.joinedAt)}` + `\`${moment(member.joinedAt).fromNow()}\``))
 }
    
}