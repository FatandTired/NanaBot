const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
let cooldown = new Set();
const os = require('os')
const cpuStat = require('cpu-stat')
module.exports = {
  name: "ping", 
  alias: ['Ping', 'botinfo'], 

execute (client, message, args){
   const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
    const set = new db.crearDB('ignorecommands')
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
   if(cooldown.has(message.author.id)){
       return message.channel.send('Espera 5s antes de volver a usar el comando');
   }
    cooldown.add(message.author.id)
    
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 5000);
    
    const days = Math.floor(client.uptime / 86400000)
    const horas = Math.floor(client.uptime / 3600000) % 24
    const minutos = Math.floor(client.uptime / 60000) % 60
    const segundos = Math.floor(client.uptime / 1000) % 60
    
   function formatBytes(bytes, decimals = 2){
       if(bytes === '0') return '0 bytes';
       const k = 1024;
       const dm = decimals < 0 ? 0 : decimals;
       const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
       
       const i = Math.floor(Math.log(bytes) / Math.log(k));
       
       return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
   }
    
   cpuStat.usagePercent(function(error, percent) {
       if(error) return message.channel.send(error)
       const memoryusage = formatBytes(process.memoryUsage().heapUsed)
       const node = process.version
       const cpu = percent.toFixed(2)
       const cpumodel = os.cpus()[0].model
       const cores = os.cpus().length
       
       const embed = new Discord.MessageEmbed()
       .setTitle('Bot Status')
       .addField('📁**RECURSOS**', [
           `<:space:850854025196470322>💾**RAM:**` + `\`${memoryusage}\``,
           `<:space:850854025196470322><a:Loading:798753457963139142>**CPU:**` + `\`${cpu}%\``,
           `<:space:850854025196470322>📡**Latencia:**` + `\`${client.ws.ping}ms\``,
       ])
       .addField('📊**ESTADISTICAS**', [
           `<:space:850854025196470322>📄**Servidores**:` + `\`${client.guilds.cache.size}\``,
           `<:space:850854025196470322>👥**Usuarios**:` + `\`${client.users.cache.size}\``,
           `<:space:850854025196470322>⏳**Uptime**:` + `\`${days} Dias | ${horas} Horas | ${minutos} Minutos\``
       ])
       .setFooter('Node version: v12.22.1')
       .setColor('36393F')
       message.channel.send(embed)
   })
    

 }

} 