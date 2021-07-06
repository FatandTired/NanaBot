const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')
module.exports = {
  name: "membercount",  //////Nombre del comando
  alias: ['mc'], ///////alias del comando

async execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    message.channel.send(`El servidor tiene actualmente **${message.guild.memberCount}** miembros.`)
 }
    
}