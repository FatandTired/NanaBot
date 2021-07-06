const Discord = require('discord.js');

module.exports = async (client, guildCreate) => {

	const embed = new Discord.MessageEmbed()
   .setThumbnail("https://cdn.discordapp.com/emojis/834286795389796384.png?v=11")
   .setTitle(`Nana ha entrado a un servidor`)
   .setColor('F83BD5')
   .addField('Nombre:', guildCreate.name)
   .addField('Owner', `<@${guildCreate.ownerID}>`)
   .addField('ID:', guildCreate.id)
   .addField('Fecha de Creacion:', guildCreate.joinedAt)
   .addField('Region:', guildCreate.region)
   .addField('Miembros:', guildCreate.memberCount, true)
   .addField('Canales', guildCreate.channels.cache.size)
   
   client.channels.cache.get("850057568667959346").send(embed)

  
}



