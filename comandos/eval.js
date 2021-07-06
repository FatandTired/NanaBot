const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const { inspect } = require('util')
module.exports = {
  name: "eval", 
  alias: ['evaluar', 'ev'], 

execute (client, message, args){
    let id = ["752336035228418059", "707676365540950018", "826289032904048661", "823045423740354570"]
	if(!id.includes(message.author.id)) return message.channel.send(`No puedes usar este comando`)
    const command = args.join(" ")
    if(!command) return message.channel.send('Escribe un codigo')
	try{
    	const evaled = eval(command)
    	let palabras = ["token", "destroy"] 
        if(palabras.some(word => message.content.toLowerCase().includes(word))){
            return message.users.cache.get('752336035228418059').send(`${message.author.id} Intento evaluar una palabra prohibida`)
        }
        const embed = new Discord.MessageEmbed()
        .setColor('36393F')
        .setTitle('Resultado Eval')
        .addField('**Tipo:**', `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
        .addField('**Codigo:**', `\`\`\`js\n${command}\`\`\``)
        .addField('**Respuesta:**', `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)
        message.channel.send(embed)
    } catch (error) {
        const embederr = new Discord.MessageEmbed()
        .setColor('f22424')
        .setTitle('Resultado Eval')
        .addField('**Codigo:**', `\`\`\`js\n${command}\`\`\``)
        .addField('**Respuesta:**', `\`\`\`js\n${error}\`\`\``)
        message.channel.send(embederr)
    }
    
 }

} 