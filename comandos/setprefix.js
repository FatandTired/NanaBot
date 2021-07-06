const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const prefix = new db.crearDB('prefix')
let cooldown = new Set()
module.exports = {
  name: "setprefix",  //////Nombre del comando
  alias: ['Setprefix'], ///////alias del comando

execute (client, message, args){
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    if(cooldown.has(message.author.id)){
       return message.channel.send('Espera 5s antes de volver a usar el comando');
   }
    cooldown.add(message.author.id)
    
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 5000);
    var perms = message.member.hasPermission('MANAGE_GUILD')
    if(!perms){

   const toggl = new db.crearDB('developers')
   let verificar4 = toggl.some('developers', (v) => v == message.author.id)
   if(!verificar4) return message.channel.send('Permiso faltante: `MANAGE_GUILD`')

    }
    let script = args[0]
    
    if(message.author.bot) return;
    if(!script) return message.channel.send("Escribe el nuevo prefix")
    
    prefix.establecer(message.guild.id, script)

    message.channel.send(`Se ha establecido el prefix: **${script}** `)
  
 }

} ////Nana 4ever