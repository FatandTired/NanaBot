const Discord = require('discord.js');
const db = require('megadb')
module.exports = async (client, member) => {
  const toggle = new db.crearDB('ak toggle')
  const toggleb = new db.crearDB('ab toggle')
  const server = member.guild.id
  if(toggle.tiene(server)){
    
    member.kick()
  }
  if(toggleb.tiene(server)){
    
    member.ban()
  }
  
}



