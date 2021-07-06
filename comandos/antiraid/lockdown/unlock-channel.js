const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
module.exports = {
  name: "unlock-channel",  //////Nombre del comando
  alias: ['unlc', 'unlock'], ///////alias del comando

execute (client, message, args){
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    let accion = args[0]
    if(!accion){
        accion = 'mensaje'
    }
    const embederr = new Discord.MessageEmbed()
     .setTitle('Unlock:')
     .setColor('f22424')
     .setDescription(`**<:exclamacion:849500825587417107> >Resultado:**\n<:nana_arrow:849113629991370752> Unlockdown Denegado <:error:849500939408506881> \n**<:interrogacion:849500862287970315> >Razon:**\n<:nana_arrow:849113629991370752> Permiso faltante: **MANAGE_CHANNELS** \n**>Usuario:**\n<:nana_arrow:849113629991370752> ${message.author} **${message.author.id}** `)
   var perms = message.member.hasPermission('MANAGE_CHANNELS')
   if(!perms){
   const toggl = new db.crearDB('developers')
   let verificar4 = toggl.some('developers', (v) => v == message.author.id)
   if(!verificar4) return message.channel.send(embederr)

    }
   if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Requiero el permiso `MANAGE_CHANNELS`')
   const everyone = message.guild.roles.cache.find(
      r => r.name === '@everyone'
   );
   
   if(accion === 'mensaje'){
     const embedmsg = new Discord.MessageEmbed()
     .setTitle('Unlock:')
     .setColor('54f017')
     .setDescription(`**<:exclamacion:849500825587417107> >Resultado:**\n<:nana_arrow:849113629991370752> Unlockdown Completado <:succes:849500904523694091> \n**<:interrogacion:849500862287970315> >Tipo:**\n<:nana_arrow:849113629991370752> Canal\n**<:exclamacion:849500825587417107> >Accion:**\n<:nana_arrow:849113629991370752> Mensajes deslockeados\n**>Moderador:**\n<:nana_arrow:849113629991370752> ${message.author} **${message.author.id}** `)
     message.channel.updateOverwrite(everyone, { SEND_MESSAGES: null })  
     message.channel.send(embedmsg)
   }
   if(accion === 'view'){
      const embedview = new Discord.MessageEmbed()
     .setTitle('Unlock:')
     .setColor('54f017')
     .setDescription(`**<:exclamacion:849500825587417107> >Resultado:**\n<:nana_arrow:849113629991370752> Unlockdown Completado <:succes:849500904523694091>
\n**<:interrogacion:849500862287970315> >Tipo:**\n<:nana_arrow:849113629991370752> Canal\n**<:exclamacion:849500825587417107> >Accion:**\n<:nana_arrow:849113629991370752> Ver canal \n**>Moderador:**\n<:nana_arrow:849113629991370752> ${message.author} **${message.author.id}** `)
      message.channel.updateOverwrite(everyone, { VIEW_CHANNEL: null })  
      message.channel.send(embedview)
   }
   
    
 }

}