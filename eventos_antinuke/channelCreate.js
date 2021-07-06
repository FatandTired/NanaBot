const Discord = require('discord.js');
const db = require('megadb')
module.exports = async (client, channelCreate, user) => {
  const trusted = new db.crearDB('trusted')
  const wl = new db.crearDB('an whitelist')
  const toggleb = new db.crearDB('an toggle')
  const server = channelCreate.guild.id
  const channel = channelCreate.id;
  if(toggleb.tiene(server)){

  const channelCreateId = channelCreate.id;
  channelCreate.guild.fetchAuditLogs({'type': 'CHANNEL_CREATE'}) 
  .then( logs => logs.entries.find(entry => entry.target.id == channelCreateId) ) 
  .then (entry => {
    let author = entry.executor.id;
    let verificarw = wl.some(server, (v) => v == author)
    let verificart = trusted.some(server, (v) => v == author)
    if(verificarw) return;
    if(verificart) return;
    const usuario = channelCreate.guild.members.cache.get(author)
    if(usuario.id === '848074235678031893') return;
    usuario.ban({ reason: 'User triggered an alert' })
    channelCreate.delete()
  })
   
  }
}
