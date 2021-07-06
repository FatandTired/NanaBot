const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {
  name: "userinfo",  //////Nombre del comando
  alias: ['user', 'uinfo', 'whois', 'i'], ///////alias del comando

execute (client, message, args){
    const db = require('megadb')
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    const guild = message.guild;
    const member = message.mentions.members.first() || guild.members.cache.get(args[0]) ||message.member;
    let estados = {
        "online": "<:online:850796276744060939> En linea",
        "idle": "<:idle:850796426871308339> Ausente",
        "dnd": "<:dnd:850796329440509992> No molestar",
        "offline": "<:offline:850796367651274782> Invisible/Desconectado"
    }
    let insignias = {
      'DISCORD_EMPLOYEE': '<:discord_employee:850824942839791626>',
      'DISCORD_PARTNER': '<:partner:850825295291875349>',
      'HOUSE_BRILLIANCE': '<:brillance:850826276490051584>',
      'HOUSE_BRAVERY': '<:bravery:850826325861335102>',
      'BUGHUNTER_LEVEL_1': '<:bug_hunter:850825086041718785>',
      'BUGHUNTER_LEVEL_2': '<:bug_hunter2:850825162701013042>',
      'VERIFIED_DEVELOPER': '<:early_dev:850825223410679819>',
      'HOUSE_BALANCE': '<:balance:850826226520424482>',
      'EARLY_SUPPORTER': '<:early_support:850823389890609194>',
      'NITRO_CLASSIC': '<:nitro_badge:850831354198884462>',
    }
    const trimArray = (arr, maxLength = 8) => {
            if (arr.length > maxLength) {
                const len = arr.length - maxLength;
                arr = arr.slice(0, maxLength);
                arr.push(`**${len}+**`);
            }
            return arr;
        }
    const roles = member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1);
    const permisos = member.permissions.toArray().sort((a, b) => b.position - a.position).map(permiso => `\`${permiso.toString()}\``).slice(0, -1);
    
    function formatDate (template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
      return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
      }, template)
    }
    const categorias = new Discord.MessageEmbed()
    .setTitle(`Quien es ${member.user.username} <:interrogacion:849500862287970315>`)
    .setColor('36393F')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('<:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322>  <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> __INFO GENERAL__', [
        '** **',
        `**Tag:** ${member.user.tag}`,
        `**ID:** ${member.user.id}`,
        `**Apodo:** ${member.nickname !== null ? `${member.nickname}` : '<:error:849500939408506881>'}`,
        `**Bostea:** <:boost:851150900445839370> ${member.premiumSince ? '<:succes:849500904523694091>' : '<:error:849500939408506881>'}`,
        `**Creacion:** <:calendario:852004306865356800>  ${formatDate('DD/MM/YYYY HH:mm:ss', member.user.createdAt)}` + `\`${moment(member.user.createdAt).fromNow()}\``,
        `**Union al servidor:** <:calendario:852004306865356800> ${formatDate('DD/MM/YYYY HH:mm:ss', member.joinedAt)}` + `\`${moment(member.joinedAt).fromNow()}\``,
        
    ]) 
    .addField('<:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> <:space:850854025196470322> __PROPIEDADES__:', [
        '** **',
        `**Roles:** Total: ` + `\`${member.roles.cache.size}\`` + `,${roles.length < 8 ? roles.join("<:separador:851474232012963880>") : roles.length > 8 ? trimArray(roles).join("<:separador:851474232012963880>") : "None"}`,
        `**Permisos:** ${permisos.length < 8 ? permisos.join("<:separador:851474232012963880>") : permisos.length > 8 ? trimArray(permisos).join("<:separador:851474232012963880>") : "None"} `,
        `**Estado:** ${estados[member.presence.status]}`,
        `**Insignias:** ${member.user.flags.toArray().length ? member.user.flags.toArray().map(badge => insignias[badge]).join(' ') : "Sin insignias"}`,
    ])
    .setFooter(`Pedido por: ${message.author.username} `)
  message.channel.send(categorias)
 }
    
}////Nana 4ever