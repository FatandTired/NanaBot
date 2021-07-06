const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const toggle = new db.crearDB('trusted')

module.exports = {
  name: "trust",  //////Nombre del comando
  alias: ['t', 'encargar'], ///////alias del comando

async execute (client, message, args){ 
    const accion = args[0]
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1])
    if(!accion) return message.channel.send('Establece un parametro' + `\`add/del/list\``)
    
    
    if(accion === 'add'){
     const embederr = new Discord.MessageEmbed()
     .setTitle('Encargar:')
     .setColor('f22424')
     .setDescription(`Solo el owner puede agregar encargados`)
    if(message.author.id !== message.guild.ownerID){

  		 const toggl = new db.crearDB('developers')
  	 	let verificar4 = toggl.some('developers', (v) => v == message.author.id)
  		 if(!verificar4) return message.channel.send(embederr)

    }
   
     if(!user) return message.channel.send('Menciona o pon la id de un usuario que este dentro del servidor')
    
     if(!toggle.tiene(server)){
         toggle.establecer(`${message.guild.id}`, [message.guild.ownerID])
        
     }
      let verificar1 = toggle.some(server, (v) => v == user.id)
      if(verificar1) return message.channel.send('El usuario ya es encargado')
      if(!verificar1){
          toggle.push(`${message.guild.id}`, `${user.id}`).catch(err => {
             message.channel.send('No se pudo establecer el usuario, asegurate que se encuentre dentro del servidor')
          })
      }
      const embedon = new Discord.MessageEmbed()
      .setTitle('Encargar:')
      .setColor('36393F')
      .setDescription(`Se añadio a ${user} como encargado`)
      message.channel.send(embedon)
    }
    if(accion === 'del'){
     
     const embederr = new Discord.MessageEmbed()
     .setTitle('Encargar:')
     .setColor('f22424')
     .setDescription(`Solo el owner puede borrar encargados`)
     if(message.author.id !== message.guild.ownerID){
     const toggl = new db.crearDB('developers')
  	 let verificar4 = toggl.some('developers', (v) => v == message.author.id)
  	 if(!verificar4) return message.channel.send(embederr)

    }
     if(!toggle.tiene(server)){
         toggle.establecer(`${message.guild.id}`, [message.guild.ownerID])
     }
     if(!user) return message.channel.send('Menciona o pon la id de un usuario')
    
     if(user.id === message.guild.ownerID) return message.channel.send('No puedes eliminar al propietario del server')

      let verificar = toggle.some(server, (v) => v == user.id)
      if(!verificar) return message.channel.send('El usuario no estaba whitelisteado')
      if(verificar){
          toggle.extract(server, user.id)
      }
      const embedoff = new Discord.MessageEmbed()
      .setTitle('Encargar:')
      .setColor('54f017')
      .setDescription(`Se removio a ${user} de encargado`)
      message.channel.send(embedoff)
    }
    if(accion === 'list'){
    let verificar2 = toggle.some(server, (v) => v == message.author.id)
    if(!verificar2){
     const toggl = new db.crearDB('developers')
     let verificar4 = toggl.some('developers', (v) => v == message.author.id)
     if(!verificar4) return message.channel.send('No puedes usar este comando')

    }
     if(!toggle.tiene(server)){
         toggle.establecer(`${message.guild.id}`, [message.guild.ownerID])
     } 
      toggle.map(server, (key) => `<@${key}>`).then(usuarios => {
       const embed = new Discord.MessageEmbed()
       .setTitle('USUARIOS  ENCARGADOS')
       .setDescription(usuarios.join("\n"))
       message.channel.send(embed)
      })
    }
 }
                                                 
 }