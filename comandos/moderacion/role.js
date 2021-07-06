const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const toggl = new db.crearDB('developers')
module.exports = {
  name: "role", 
  alias: ['rol'], 

async execute (client, message, args){
    const accion = args[0]
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    
    if(!message.member.hasPermission('ADMINISTRATOR')){  
  		let verificar4 = toggl.some('developers', (v) => v == message.author.id)
 		if(!verificar4) return message.channel.send('Permiso faltante: `ADMINISTRATOR`')
    }
    if(!accion) return message.channel.send('Especifica un parametro `give/remove/list`')
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
    if(accion === 'give'){
        if(!user) return message.channel.send('Necesitas especificar un usuario para dar un rol `role give <user id o mencion> <role id o mencion>`')
        if(!role) return message.channel.send('Necesitas especificar un rol para dar `role give <user id o mencion> <role id o mencion>`')
        let gRole = message.guild.roles.cache.find(r => r.name === `${role.name}`)
        if(!gRole) return message.channel.send('No se encontro el rol')
        const mybot = message.guild.members.cache.get('848074235678031893')
        if(gRole.position > mybot.roles.highest.position) return message.channel.send("No tengo permisos para añadir el rol, sube mi rol para evitar errores");
        if(message.member.id !== message.guild.ownerID){
        if(message.member.roles.highest.position < gRole.position){
            let verificar3 = toggl.some('developers', (v) => v == message.author.id)
 		    if(!verificar3) return message.channel.send('No tienes permiso para dar ese rol')
        }
        }
        if(user.roles.cache.has(`${role.id}`)) return message.channel.send('El usuario ya posee el rol')
        try{
         await user.roles.add(`${role.id}`)
         message.channel.send('Se le añadio el rol correctamente.')
        } catch(error){
            message.channel.send(`Hubo un error al añadir el rol, verifica que mi rol este mas alto que el que intentas dar`)
        }
        

        
        }
    if(accion === 'remove'){
        if(!user) return message.channel.send('Necesitas especificar un usuario para quitar un rol `role remove <user id o mencion> <role id o mencion>`')
        if(!role) return message.channel.send('Necesitas especificar un rol para quitar `role remove <user id o mencion> <role id o mencion>`')
        let gRole = message.guild.roles.cache.find(r => r.name === `${role.name}`)
        if(!gRole) return message.channel.send('No se encontro el rol')
        const mybot = message.guild.members.cache.get('848074235678031893')
        if(gRole.position > mybot.roles.highest.position) return message.channel.send("No tengo permisos para quitar el rol, sube mi rol para evitar errores");
        if(message.member.id !== message.guild.ownerID){
        if(message.member.roles.highest.position < gRole.position){
            let verificar3 = toggl.some('developers', (v) => v == message.author.id)
 		    if(!verificar3) return message.channel.send('No tienes permiso para quitar ese rol')
        }
        }
        if(!user.roles.cache.has(`${role.id}`)) return message.channel.send('El usuario no posee el rol')
        try{
         await user.roles.remove(`${role.id}`)
         message.channel.send('Se removio el rol correctamente.')
        } catch(error){
            message.channel.send(`Hubo un error al remover el rol, verifica que mi rol este mas alto que el que intentas quitar`)
        }
        

        
        }
    if(accion === 'list'){

        const trimArray = (arr, maxLength = 30) => {
            if (arr.length > maxLength) {
                const len = arr.length - maxLength;
                arr = arr.slice(0, maxLength);
                arr.push(` and ${len} more roles...`);
            }
            return arr;
        }
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1);
        const embed = new Discord.MessageEmbed()
        .setColor('36393F')
  		.setThumbnail(message.guild.iconURL())
  		.addField(`**ROLES:**`, [
            `**Total:**` + `\`${message.guild.roles.cache.size}\``,
             `${roles.length < 30 ? roles.join(" **|** ") : roles.length > 30 ? trimArray(roles).join(" **|** ") : "Ninguno"}`
    ])
        .setTitle(`Roles de ${message.guild.name}`)
        .setFooter(`Pedido por: ${message.member.user.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    }
     

 }

} 