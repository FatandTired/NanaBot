const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ['c', 'purge', 'borrar', 'limpiar'], 

execute (client, message, args){
    
const db = require('megadb')
const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
const set = new db.crearDB('ignorecommands')
if(set.tiene(message.guild.id)) return message.channel.send('El servidor tiene desactivados los comandos')
const toggle = new db.crearDB('developers')
if(!message.member.hasPermission('MANAGE_MESSAGES')){
   let verificar1 = toggle.some('developers', (v) => v == message.author.id)
   if(!verificar1) return message.channel.send('No tienes permiso para usar este comando')
}
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2]);

if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
message.delete()
message.channel.messages.fetch({
 limit: 100,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 if(!user){
     messages = amount;
 }

 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});

 }

} 