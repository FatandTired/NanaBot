const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {
  name: "serverinfo",  //////Nombre del comando
  alias: ['server', 'svinfo', 'sv'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    var voz = message.guild.channels.cache.filter(c=>c.type === 'voice').array().length;
    var chat = message.guild.channels.cache.filter(c=>c.type === 'text').array().length;
	var total = message.guild.channels.cache.filter(c => c.type === 'text' || c.type === 'voice').size;
    var online = message.guild.members.cache.filter(m => m.user.presence.status === 'online' && !m.user.bot).size;
    var dnd = message.guild.members.cache.filter(m => m.user.presence.status === 'dnd' && !m.user.bot).size;
    var idle = message.guild.members.cache.filter(m => m.user.presence.status === 'idle' && !m.user.bot).size;
    var offline = message.guild.members.cache.filter(m => m.user.presence.status === 'offline' && !m.user.bot).size;
    const embed = new Discord.MessageEmbed()
    .setTitle(`Info de ${message.guild.name}`)
    .setColor('36393F')
    .setThumbnail(message.guild.iconURL())
    .setFooter(`Pedido por: ${message.author.username} `)
    .addField('<:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> __Informacion general__', [
        '** **',
        `**ID:** ${message.guild.id}`,
        `**Nombre:** ${message.guild.name}`,
        `**Propietario:** ${message.guild.owner},`,
        `**Miembros:** ${message.guild.memberCount}, <:online:850796276744060939>Online: ${online}, <:dnd:850796329440509992>No molestar: ${dnd},\n <:idle:850796426871308339>Ausente: ${idle}, <:offline:850796367651274782> Offline: ${offline}`,
        `**Bots:** ${message.guild.members.cache.filter((m) => m.user.bot).size}`
    ])
    .addField('<:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322>__Propiedades__:', [
        '** **',
        `**Canales:** Total: ${total}, Texto: ${chat}, Voz: ${voz} `,
        `**Roles:** ${message.guild.roles.cache.size}`,
        `**Emojis:** Total: ${message.guild.emojis.cache.size}, Estaticos: ${message.guild.emojis.cache.filter((e) => !e.animated).size}, Animados: ${message.guild.emojis.cache.filter((e) => e.animated).size}`
    ])
    .addField('<:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> __Otros__:', [
        '** **',
        `**Creacion:**<:calendario:852004306865356800> ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')}` + `\`${moment(message.guild.createdTimestamp).fromNow()}\``,
        `**Region:**<:region:852004306587746314>  ${message.guild.region}`,
        `**Mejoras:**<:boost:851150900445839370> ${message.guild.premiumSubscriptionCount || "0"}, Nivel:  ${message.guild.premiumTier ? `Nivel ${message.guild.premiumTier}` : 'Ninguno' }`,
        `**Nivel de verificacion:** ${message.guild.verificationLevel}`
    ])

    message.channel.send(embed)
 }
 
} ////Nana 4ever