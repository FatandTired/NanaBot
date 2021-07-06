const Discord = require('discord.js');

module.exports = async (client, guildDelete) => {

	const embed = new Discord.MessageEmbed()
   .setThumbnail("https://cdn.discordapp.com/emojis/834283192252760074.png?v=1")
   .setTitle(`Nana ha salido de un servidor`)
   .setColor('F83BD5')
   .addField('Nombre:', guild.name)
   .addField('ID:', guild.id)
   
   client.channels.cache.get("850057568667959346").send(embed)

  
}