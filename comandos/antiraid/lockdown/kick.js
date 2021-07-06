const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const toggle = new db.crearDB('ak toggle')
const toggle1 = new db.crearDB('ab toggle')
      
module.exports = {
  name: "lockdown-autokick",  //////Nombre del comando
  alias: ['lock-autokick', 'ld-ak'], ///////alias del comando

execute (client, message, args){

    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    
    const accion = args[0]
    const embederr = new Discord.MessageEmbed()
     .setTitle('Lockdown:')
     .setColor('f22424')
     .setDescription(`**<:exclamacion:849500825587417107> >Resultado:**\n<:nana_arrow:849113629991370752> Lockdown Denegado <:error:849500939408506881> \n**<:interrogacion:849500862287970315> >Razon:**\n<:nana_arrow:849113629991370752> Permiso faltante: **ADMINISTRATOR** \n**>Usuario:**\n<:nana_arrow:849113629991370752> ${message.author} **${message.author.id}** `)
	if(message.author.id !== message.guild.ownerID){
   	   const trusted = new db.crearDB('trusted')
       let verificarw = trusted.some(server, (v) => v == message.author.id)
       if(!verificarw){
	   const toggl = new db.crearDB('developers')
       let verificar4 = toggl.some('developers', (v) => v == message.author.id)
	   if(!verificar4) return message.channel.send(embederr)
      }
    }
    if(!accion) return message.channel.send('Establece el parametro(on/off)')

    if(accion === 'on'){
      if(toggle.tiene(server)) return message.channel.send('El lockdown ya esta activado')
      if(toggle1.tiene(server)) return message.channel.send('Ya hay otro lockdown activado')
      toggle.establecer(server, server)
      const embedon = new Discord.MessageEmbed()
      .setTitle('Lockdown:')
      .setColor('36393F')
      .setDescription(`**<:exclamacion:849500825587417107> >Resultado:**\n<:nana_arrow:849113629991370752> Lockdown Completado <:succes:849500904523694091> \n**<:interrogacion:849500862287970315> >Tipo:**\n<:nana_arrow:849113629991370752> Servidor\n**<:exclamacion:849500825587417107> >Accion:**\n<:nana_arrow:849113629991370752> Kick\n**>Moderador:**\n<:nana_arrow:849113629991370752> ${message.author} **${message.author.id}** `)
      message.channel.send(embedon).then(message.channel.send('Se ha activado el lockdown, a partir de ahora todo usuario que entre sera expulsado'))
    }
    if(accion === 'off'){
      if(!toggle.tiene(server)) return message.channel.send('El lockdown ya se encuentra desactivado')
      toggle.eliminar(server)
      const embedoff = new Discord.MessageEmbed()
      .setTitle('Unlock:')
      .setColor('54f017')
      .setDescription(`**<:exclamacion:849500825587417107> >Resultado:**\n<:nana_arrow:849113629991370752> Unlock completado<:succes:849500904523694091> \n**>Moderador:**\n<:nana_arrow:849113629991370752> ${message.author} **${message.author.id}** `)
      message.channel.send(embedoff)
    }
  
 }

} ////Nana 4ever