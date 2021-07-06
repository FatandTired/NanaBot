const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const mongoose = require('mongoose')
const schema = require('/home/container/models/custom-commands')

module.exports = {
  name: "cc", 
  alias: ['customcommand', 'custom-command', 'command', 'cmd'], 

async execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
  if(!message.member.hasPermission('MANAGE_GUILD')){
         const toggl = new db.crearDB('developers')
  	 	 let verificar4 = toggl.some('developers', (v) => v == message.author.id)
  		 if(!verificar4) return message.channel.send('Permiso faltante: `MANAGE_GUILD`')

    }
  const accion = args[0]
  const name = args[1]; 
  const response = args.slice(2).join(' ');
  
  if(accion === 'add'){
  if(!name) return message.channel.send('Especifica el nombre del comando')
  if(!response) return message.channel.send('Especifica la respuesta del comando')
  const data = await schema.findOne({ Guild: message.guild.id, Command: name.toLowerCase()})
  if(data) return message.channel.send('Ya hay un comando con ese nombre')
  const newData = new schema({ 
      Guild: message.guild.id,
      Command: name.toLowerCase(),
      Response: response
  })
  await newData.save();
  message.channel.send(`Se agrego el comando **${name.toLowerCase()}**`)
  }
  if(accion === 'del'){
  if(!name) return message.channel.send('Especifica el comando')
  const data = await schema.findOne({ Guild: message.guild.id, Command: name})
  if(!data) return message.channel.send('El comando no existe')
  await schema.findOneAndDelete({ Guild: message.guild.id, Command: name})
  message.channel.send(`Se removio el comando **${name}**`)
  }
  if(accion === 'list'){
  const data = await schema.find({ Guild: message.guild.id })
  if(!!data === false) return message.channel.send('El servidor no tiene comandos personalizados')
  message.channel.send(
      new Discord.MessageEmbed()
      .setTitle('Comandos')
      .setColor('F83BD5')
      .setDescription(
          data.map((cmd, i) => 
      `**${i + 1}** • **${cmd.Command}**`
  ).join('\n')))
  }
 }

} 