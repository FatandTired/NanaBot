const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const toggle = new db.crearDB('an whitelist')

module.exports = {
  name: "whitelist",  //////Nombre del comando
  alias: ['wl'], ///////alias del comando

async execute (client, message, args){
    
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1])
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
    const accion = args[0]
    if(!accion) return message.channel.send('Establece un parametro' + `\`add/del/list\``)
    if(accion === 'add'){
     if(!user) return message.channel.send('Menciona o pon la id de un usuario que este dentro del servidor')
     if(!toggle.tiene(server)){
         toggle.establecer(`${message.guild.id}`, [])
     } 
      let verificar1 = toggle.some(server, (v) => v == user.id)
      if(verificar1) return message.channel.send('El usuario ya estaba whitelisteado')
      if(!verificar1){
          toggle.push(`${message.guild.id}`, `${user.id}`)
      }
      const embedon = new Discord.MessageEmbed()
      .setTitle('Whitelist:')
      .setColor('36393F')
      .setDescription(`Se añadio a ${user} a la whitelist, para eliminarlo usa **whitelist del**`)
      message.channel.send(embedon)
    }
    if(accion === 'del'){
     if(!toggle.tiene(server)){
         return message.channel.send('El servidor no tiene miembros whitelisteados')
     }
      if(!user) return message.channel.send('Menciona o pon la id de un usuario que este dentro del servidor')
      let verificar = toggle.some(server, (v) => v == user.id)
      if(!verificar) return message.channel.send('El usuario no estaba whitelisteado')
      if(verificar){
          toggle.extract(server, user.id)
      }
      const embedoff = new Discord.MessageEmbed()
      .setTitle('Whitelist:')
      .setColor('54f017')
      .setDescription(`Se quito a ${user} de la whitelist`)
      message.channel.send(embedoff)
    }
    if(accion === 'list'){
     if(!toggle.tiene(server)){
         return message.channel.send('El servidor no tiene miembros whitelisteados')
     }
      toggle.map(server, (key) => `<@${key}>`).then(usuarios => {
       const embed = new Discord.MessageEmbed()
       .setTitle('USUARIOS  WHITELISTEADOS')
       .setDescription(usuarios.join("\n"))
       message.channel.send(embed)
      })
    }
 }
                                                 
 }

