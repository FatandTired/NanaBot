const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const setimg = new db.crearDB('WTEXT')

module.exports = {
  name: "wtext",  //////Nombre del comando
  alias: [], ///////alias del comando

execute (client, message){
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('No tienes el permiso: `MANAGE_GUILD`')
    
    const args = message.content.slice(0).trim().split(/ +/g);
    let script = args.slice(1).join(' ');
    if(message.author.bot) return;
    if (!script) return message.channel.send("Debes poner el texto de bienvenida");
    setimg.establecer(message.guild.id, script)
    message.channel.send(`Se ha establecido el texto de bienvenida, recuerda establecer la imagen y el canal tambien.`)
 }

} 