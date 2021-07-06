const Discord = require('discord.js');
const db = require('megadb')
module.exports = async (client, channelDelete, user) => {
  const trusted = new db.crearDB('trusted')
  const wl = new db.crearDB('an whitelist')
  const toggleb = new db.crearDB('an toggle')
  const server = channelDelete.guild.id
  var posicion = channelDelete.position
  const channel = channelDelete.id;
  if(toggleb.tiene(server)){

  const channelDeleteId = channelDelete.id;
  channelDelete.guild.fetchAuditLogs({'type': 'CHANNEL_DELETE'}) 
  .then( logs => logs.entries.find(entry => entry.target.id == channelDeleteId) ) 
  .then (entry => {
    let author = entry.executor.id;
    let verificarw = wl.some(server, (v) => v == author)
    let verificart = trusted.some(server, (v) => v == author)
    if(verificarw) return;
    if(verificart) return;
    const usuario = channelDelete.guild.members.cache.get(author)
    if(usuario.id === '848074235678031893') return;
    usuario.ban({ reason: 'User triggered an alert' })
    channelDelete.clone().then((canal) =>{
        canal.setPosition(posicion)
    })
  })
   
  }
}
