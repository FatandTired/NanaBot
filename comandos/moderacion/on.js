const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const toggle = new db.crearDB('offed')
const toggl = new db.crearDB('developers')
module.exports = {
  name: "on",  //////Nombre del comando
  alias: [], ///////alias del comando

async execute (client, message, args){ 
const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff){
       let verificar5 = toggl.some('developers', (v) => v == message.author.id)
  	   if(!verificar5) return;
   }    
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!message.member.hasPermission('ADMINISTRATOR')){

  	 	 let verificar4 = toggl.some('developers', (v) => v == message.author.id)
  		 if(!verificar4) return message.channel.send('Permiso faltante: `ADMINISTRATOR`')

    }
    if(!user) return message.channel.send('Menciona o pon la id de un usuario que este dentro del servidor')
    let verificar1 = toggle.some(server, (v) => v == user.id)
    if(!verificar1) return message.channel.send('El usuario no esta silenciado')
    if(!toggle.tiene(server)){
         toggle.establecer(`${message.guild.id}`, [])
        
     }
    if(verificar1){
       toggle.extract(`${message.guild.id}`, `${user.id}`).catch(err => {
       message.channel.send('No se pudo establecer el usuario, asegurate que se encuentre dentro del servidor')
       })
        message.channel.send('El usuario a sido desmuteado')
    }

 }
                                                 
 }