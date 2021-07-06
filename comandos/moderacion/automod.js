const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const automod = new db.crearDB('automod')

module.exports = {
  name: "blacklist",  //////Nombre del comando
  alias: ['automod'], ///////alias del comando

execute (client, message, args){
   const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
   if(!message.member.hasPermission('MANAGE_GUILD')){

  		const toggl = new db.crearDB('developers')
  	 	let verificar4 = toggl.some('developers', (v) => v == message.author.id)
  		if(!verificar4) return message.channel.send('Permiso faltante: `MANAGE_GUILD`')

    }
    const automod = new db.crearDB('automod')
    const accion = args[0];
    if(!accion) return message.channel.send('Establece un parametro `add/del/list`')
    if(accion === 'add'){
    	let script = args[1]
        if(automod.has(`${message.guild.id}.words.${script}`)) return message.channel.send('Esa palabra ya se encuentra en la blacklist')
    	if(!script) return message.channel.send("Añade la palabra que se prohibirá");
        automod.set(`${message.guild.id}.words.${script}`, 'true')
        message.channel.send(`La palabra **${script}** se añadio a la blacklist`)
    }
    if(accion === 'del'){
    	let script = args[1]
    	if(!script) return message.channel.send("Especifica la palabra que sera removida de la blacklist");
        if(!automod.has(`${message.guild.id}.words.${script}`)) return message.channel.send('Esa palabra no se encuentra en la blacklist')
        automod.delete(`${message.guild.id}.words.${script}`)
        message.channel.send(`La palabra **${script}** se removio de la blacklist`)
    }
    
    if(accion === 'list'){
      const palabras = automod.map(`${message.guild.id}.words`, (n, t) => `**${t}**`).then(pl => {
       const embed = new Discord.MessageEmbed()
       .setTitle('BLACKLIST')
       .setDescription(pl.join("\n"))
       message.channel.send(embed)
      })
    }
    
 }

} 