const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Util = require('util')
module.exports = {
  name: "emojisteal",  //////Nombre del comando
  alias: ['stealemoji', 'emotesteal', 'stealemote'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    var perms = message.member.hasPermission('MANAGE_EMOJIS')
    if(!perms){

   const toggl = new db.crearDB('developers')
   let verificar4 = toggl.some('developers', (v) => v == message.author.id)
   if(!verificar4) return message.channel.send('Permiso faltante: `MANAGE_EMOJIS`')

    }
    
    const emoji = args[0]
    if(!emoji) return message.channel.send("Debes decirme un emoji")
  if(!emoji.split(':')[1]) return message.channel.send("Ese no es un emoji valido")

  for (const emojis of args) {
    const getEmoji = Discord.Util.parseEmoji(emojis)
    if(getEmoji.id){
    const ex = getEmoji.animated ? ".gif" : ".png";
    const emojiU = `https://cdn.discordapp.com/emojis/${getEmoji.id + ex}`
    let name = args[1]
    if(!name){
        name = getEmoji.name
    }
    if(name.length > 30) return message.channel.send('El nombre del emoji es demasiado largo')
	
    message.guild.emojis.create(emojiU, name).then(emoji => message.channel.send(`Se añadio el emoji ${emoji} ` + `\`${emoji.name}\`` + ' al servidor'))
    }
  }
  }
}