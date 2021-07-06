const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const toggle = new db.crearDB('an toggle')

module.exports = {
  name: "antinuke",  //////Nombre del comando
  alias: ['an'], ///////alias del comando

execute (client, message, args){
    
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    
    
    const accion = args[0]
	
	const embederr = new Discord.MessageEmbed()
     .setTitle('Antinuke:')
     .setColor('f22424')
     .setDescription(`No Tienes permiso para usar este comando`)
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
      if(toggle.tiene(server)) return message.channel.send('El antinuke ya se encuentra activado')
      toggle.establecer(server, server)
      const embedon = new Discord.MessageEmbed()
      .setTitle('Antinuke:')
      .setColor('36393F')
      .setDescription(`Se activo el modo antinuke\nApartir de ahora se registrara cualquier evento peligroso dentro del servidor, y se baneara a cualquier usuario que active una alerta\nSi quieres inmunizar a alguien usa el comando whitelist`)
      message.channel.send(embedon)
    }
    if(accion === 'off'){
      if(!toggle.tiene(server)) return message.channel.send('El antinuke ya se encuentra desactivado')
      toggle.eliminar(server)
      const embedoff = new Discord.MessageEmbed()
      .setTitle('Antinuke:')
      .setColor('54f017')
      .setDescription(`Se desactivo el antinuke, ya no se registraran los eventos dentro del servidor`)
      message.channel.send(embedoff)
    }
  
 }

}