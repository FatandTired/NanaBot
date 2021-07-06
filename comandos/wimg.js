const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const setimg = new db.crearDB('WCIMG')

module.exports = {
  name: "wimg",  //////Nombre del comando
  alias: ['img'], ///////alias del comando

execute (client, message){
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;

    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('No tienes el permiso: `MANAGE_GUILD`')
    
    const args = message.content.slice(0).trim().split(/ +/g);
    let script = args.slice(1).join(' ');
    if(message.author.bot) return;
    if (!script) return message.channel.send("Debes poner el enlace de una imagen");
    setimg.establecer(message.guild.id, script)
    message.channel.send(`Se ha establecido la imagen, recuerda establecer el canal de bienvenidas con **wchannel** y el texto con **wtext**. `)
 }

} 