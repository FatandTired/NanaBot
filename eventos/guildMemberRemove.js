const Discord = require('discord.js');
const db = require('megadb')
const set = new db.crearDB('exitlogs')

module.exports = async (client, guildMemberRemove) => {
    const canal = await set.obtener(guildMemberRemove.guild.id)
    if(!canal) return;
    if(canal){
	const member = guildMemberRemove;
	const embed = new Discord.MessageEmbed()
    .setTitle('Un usuario ha salido del servidor')
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
    .addField('**Info**', [
        `**Usuario:** ${member.user}` + `\`${member.user.tag}\``,
        `**ID:** ${member.user.id}`,
    ])
    .setTimestamp()
    client.channels.cache.get(canal).send(embed)
    }
  
}