const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "word",//////Nombre del comando
  alias: ['definicion', 'definición', 'palabra'], ///////alias del comando

async execute (client, message, args){
    const db = require('megadb')
    const set = new db.crearDB('ignorecommands')
    const off = new db.crearDB('offed')
    const server = message.guild.id
    let verificaroff = off.some(server, (v) => v == message.member.id)
    if(verificaroff) return;
    if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
    const pal = args.slice(0).join(" ")
    if(!pal) return message.channel.send('Especifica una palabra')
    const { RAE } = require('rae-api')
    const rae = new RAE();
    const search = await rae.searchWord(pal).catch(err => {
        return message.channel.send('No se encontro la palabra')
    })
    const wordID = search.getRes()[0].getId().catch(err => {
        return message.channel.send('No se encontro la palabra')
    })
    
    const result = await rae.fetchWord(wordID).catch(err => {
        return message.channel.send('No se encontro la palabra')
    })
    const definition = result.getDefinitions().catch(err => {
        return message.channel.send('No se encontro la palabra')
    })
    const first = definition[0].getDefinition().catch(err => {
        return message.channel.send('No se encontro la palabra')
    })
    
    message.channel.send(`Definición de **${pal}**:\n${first}`).catch(err => {
        return message.channel.send('No se encontro la palabra')
    })
 }
    
}