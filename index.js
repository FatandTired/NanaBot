const { MessageEmbed, MessageAttachment } = require('discord.js');
const Discord = require("discord.js");
require('discord-reply');
const client = new Discord.Client();
const db = require('megadb')
const disbut = require('discord-buttons')(client);
const prefix1 = new db.crearDB('prefix')
const { Client, Collection, Guild } = require('discord.js');
const mongoose = require('mongoose');
const keepAlive = require('./server.js')
var colors = require('colors/safe');
mongoose.connect('mongodb+srv://NanaDB:Rusia4ever@nanadb.0pnjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { //Haces la conexion con la url
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db =>  console.log(colors.red.bold("NanaDB Conectada"))) 
.catch(err => console.error(err)) //Capturas el error

client.on('message', async message => {
    const args1 = message.content.slice(0).trim().split(/ +/g);
    const ccommand = args1.shift().toLowerCase();
    
    const schema = require('/home/container/models/custom-commands')
    
    const data = await schema.findOne({ Guild: message.guild.id, Command: ccommand})
    if(data){
        if(message.author.bot) return;
        message.channel.send(data.Response)
    }
})

client.on("ready", async () => {
  const estados = ['TEST NanaPremium']
  setInterval(() => {
    function presence() {
      client.user.setPresence({
        status: "online",
        activity: {
          name: estados[Math.floor(Math.random() * estados.length)],
          type: "STREAMING",
          url: "https://www.youtube.com/watch?v=ZH_TxrpyY-s"

        }
      })
    }
    presence();
  }, 7000);
  var colors = require('colors/safe');
  console.log(colors.yellow.bold("█▄░█ ▄▀█ █▀█ ▄▀█ █▄░█ ░░█ ▄▀█   █▀▀ █▀█ ▄▀█ █▀▀ █▄▀"))
  console.log(colors.red.bold("█░▀█ █▀█ █▀▄ █▀█ █░▀█ █▄█ █▀█   █▄▄ █▀▄ █▀█ █▄▄ █░█"))
  await client.channels.cache.get('856709647323234304').messages.fetch('856710522086490122').then(m => console.log('Msg cargado'))
});

client.on('messageReactionAdd', async (reaction, user) => {
    const sv = reaction.message.guild
    const msg = reaction.message
    const c = reaction.message.channel
    const mem = await sv.members.cache.get(user.id)
    
    if(sv.id === '846937568753745921' && c.id === '856709647323234304' && msg.id === '856710522086490122' && reaction.emoji.name === '🎮'){
        mem.roles.add('856710414339014707')
    }
    if(sv.id === '846937568753745921' && c.id === '856709647323234304' && msg.id === '856710522086490122' && reaction.emoji.id === '850147303690993714'){
        mem.roles.add('856710393145720842')
    }
})

const fs = require('fs')
let { readdirSync } = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));
const commandUtil = fs.readdirSync('./comandos/utilidad').filter(file => file.endsWith('.js'));
const commandMusic = fs.readdirSync('./comandos/musica').filter(file => file.endsWith('.js'));
const commandM = fs.readdirSync('./comandos/moderacion').filter(file => file.endsWith('.js'));
const commandAnr = fs.readdirSync('./comandos/antiraid').filter(file => file.endsWith('.js'));
const commandAn = fs.readdirSync('./comandos/antiraid/antinuke').filter(file => file.endsWith('.js'));
const commandLd = fs.readdirSync('./comandos/antiraid/lockdown').filter(file => file.endsWith('.js'));
const commandC = fs.readdirSync('./comandos/custom-commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}
for (const file of commandMusic) {
  const command = require(`./comandos/musica/${file}`);
  client.commands.set(command.name, command);
}
for (const file of commandAn) {
  const command = require(`./comandos/antiraid/antinuke/${file}`);
  client.commands.set(command.name, command);
}
for (const file of commandUtil) {
  const command = require(`./comandos/utilidad/${file}`);
  client.commands.set(command.name, command);
}
for (const file of commandM) {
  const command = require(`./comandos/moderacion/${file}`);
  client.commands.set(command.name, command);
}
for (const file of commandAnr) {
  const command = require(`./comandos/antiraid/${file}`);
  client.commands.set(command.name, command);
}
for (const file of commandLd) {
  const command = require(`./comandos/antiraid/lockdown/${file}`);
  client.commands.set(command.name, command);
}
for (const file of commandC) {
  const command = require(`./comandos/custom-commands/${file}`);
  client.commands.set(command.name, command);
}


for(const file of readdirSync('./eventos')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}
for(const file of readdirSync('./eventos_antinuke')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos_antinuke/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}

client.on('message', async (message) => {
   const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificar1 = off.some(server, (v) => v == message.member.id)
   if(verificar1){
       message.delete()
   }
   });

client.on("message", async (message) => {
    
  let prefix;
  if(prefix1.tiene(message.guild.id)){
    prefix = await prefix1.obtener(message.guild.id)
  } else {
    prefix = 'n!'
  }
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
      if(message.author.bot) return;
      let prefix;
  	  if(prefix1.tiene(message.guild.id)){
      prefix = await prefix1.obtener(message.guild.id)
  	} else {
   	  prefix = 'n!'
  	}
     message.channel.send(`Mi prefix en este servidor es: ${prefix}`)
  }
    
    
    if(message.content.startsWith('!ip')){
        if(message.guild.id !== '702294663494762546') return;
        const user = message.author

  		const embed = new Discord.MessageEmbed()
   		.setThumbnail('https://cdn.discordapp.com/icons/702294663494762546/a_e9ba76b8f778153f3a9e400f1e5a7497.png?size=64')
   		.setTitle('__IP de MPCSM__')
  	    .setColor('F83BD5')
  	    .addField('**⌇・<:java:850147303690993714> IP JAVA:  mangoland.mc-srv.com   VERSION: 1.17 **', '** **')
 		.addField('**⌇・<:bedrock:850147256266522634> IP BEDROCK: 51.222.97.11 PUERTO: 25585 VERSIÓN: 1.17.2**', '** **')
        .setFooter(` Pedido por: ${message.member.displayName} `, 'https://cdn.discordapp.com/emojis/832274298236305451.png?v=1')
  
         message.channel.send(embed)
  }

   
  if(message.content.startsWith('ip')){
        if(message.guild.id !== '702294663494762546') return;
        const user = message.author

  		const embed = new Discord.MessageEmbed()
   		.setThumbnail('https://cdn.discordapp.com/icons/702294663494762546/a_e9ba76b8f778153f3a9e400f1e5a7497.png?size=64')
   		.setTitle('__IP de MPCSM__')
  	    .setColor('F83BD5')
  	    .addField('**⌇・<:java:850147303690993714> IP JAVA:  mangoland.mc-srv.com   VERSION: 1.17 **', '** **')
 		.addField('**⌇・<:bedrock:850147256266522634> IP BEDROCK: 51.222.97.11 PUERTO: 25585 VERSIÓN: 1.17.2**', '** **')
        .setFooter(` Pedido por: ${message.member.displayName} `, 'https://cdn.discordapp.com/emojis/832274298236305451.png?v=1')
  
         message.channel.send(embed)
  }
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if (cmd) {
    cmd.execute(client, message, args)
  }
    
  if(!cmd){
      let prefix;
  	  if(prefix1.tiene(message.guild.id)){
      prefix = await prefix1.obtener(message.guild.id)
  	} else {
   	  prefix = 'n!'
  	}
      const embed = new Discord.MessageEmbed()
      .setTitle('Ehh...')
      .setColor('f22424')
      .setDescription(`No se encontro el comando\nUsa ${prefix}help para obtener la lista de comandos`)
      message.channel.send(embed)
  }
    
});
client.on("message", message => {
        let msg = message.content;
        const aA = message.author;
        const aB = message.mentions.users.first();
        if(message.guild.id !== '702294663494762546') return;
        if(msg.includes("@")){
            
        	if(aA.id !== '548410451818708993') return;

       		message.lineReplyNoMention(` ${aB} **Para poder verificarte y acceder a este servidor escribe el código/letras verdes que esta arriba**`).then(msge => {
    setTimeout(() => msge.delete(), 45000)
   })
        }
});

client.on('message', message => {
    if(message.channel.id === '852648148030586931'){
        if(message.content.includes('ñ')){
            message.delete()
        }
    }
if(message.content.startsWith('Ip')){
  if(message.guild.id !== '846937568753745921') return;
  if(message.author.bot) return;
  const user = message.author;
  message.channel.send(` ${user} Esta es la ip: `)
  const embed = new Discord.MessageEmbed()
  .setThumbnail('https://cdn.discordapp.com/icons/702294663494762546/a_e9ba76b8f778153f3a9e400f1e5a7497.png?size=64')
  .setTitle('__IP de EPICLAND__')
  .setColor('F83BD5')
  .addField('🔄**SERVIDOR JAVA**', [
      '<:space:850854025196470322><:java:850147303690993714>**Java: IP:** `game01.seaperf.com:25910`',
      '** **'
  ])
  .addField('🎮**SERVIDOR BEDROCK**', [
      '<:space:850854025196470322><:bedrock:850147256266522634>**Bedrock:' + ' IP' + `\`163.123.204.134\`` +  'PUERTO:**' + `\`25295\``,
  ])
  .setImage('https://images.hive.blog/DQmPmVP53JytEx7m6DXBX2sp4p6zmaa8ajcdv3prHnrV9H5/5bEGgqZEHBMe6s3wiPgGFTi3naqHERgdwJew6rJYRaB3RR7sSAdZKnpKTMZNzqg1NNd5iSJQZZCLLiBLzCBPUNzACjfEqbob.gif')
  .setFooter(` Pedido por: ${message.member.displayName} `, 'https://cdn.discordapp.com/emojis/832274298236305451.png?v=1')
  
     message.channel.send(embed) 
}
    
if(message.content.startsWith('ip')){
  if(message.guild.id !== '846937568753745921') return;
  if(message.author.bot) return;
  const user = message.author;
  message.channel.send(` ${user} Esta es la ip: `)
  const embed = new Discord.MessageEmbed()
  .setThumbnail('https://cdn.discordapp.com/icons/702294663494762546/a_e9ba76b8f778153f3a9e400f1e5a7497.png?size=64')
  .setTitle('__IP de EPICLAND__')
  .setColor('F83BD5')
  .addField('🔄**SERVIDOR JAVA**', [
      '<:space:850854025196470322><:java:850147303690993714>**Java: IP:** `game01.seaperf.com:25910`',
      '** **'
  ])
  .addField('🎮**SERVIDOR BEDROCK**', [
      '<:space:850854025196470322><:bedrock:850147256266522634>**Bedrock:' + ' IP' + `\`163.123.204.134\`` +  'PUERTO:**' + `\`25295\``,
  ])
  
  .setImage('https://images.hive.blog/DQmPmVP53JytEx7m6DXBX2sp4p6zmaa8ajcdv3prHnrV9H5/5bEGgqZEHBMe6s3wiPgGFTi3naqHERgdwJew6rJYRaB3RR7sSAdZKnpKTMZNzqg1NNd5iSJQZZCLLiBLzCBPUNzACjfEqbob.gif')
  .setFooter(` Pedido por: ${message.member.displayName} `, 'https://cdn.discordapp.com/emojis/832274298236305451.png?v=1')
  
     message.channel.send(embed) 
}
});


client.snipes = new Collection();

client.on('messageDelete', message => {
  let snipes = client.snipes.get(message.channel.id) || [];
  if(snipes.length > 8) snipes = snipes.slice(0, 7);
  
  snipes.unshift({
      msg: message,
      image: message.attachments.first() ? message.attachments.first().proxyURL : null,
      time: Date.now(),
  });
      client.snipes.set(message.channel.id, snipes)

    
});

client.editsnipe = new Collection();

client.on('messageUpdate', message => {
  let snipes = client.editsnipe.get(message.channel.id) || [];
  if(snipes.length > 8) snipes = snipes.slice(0, 7);
  
  snipes.unshift({
      msg: message,
      image: message.attachments.first() ? message.attachments.first().proxyURL : null,
      time: Date.now(),
  });
      client.editsnipe.set(message.channel.id, snipes)

    
});


client.on('guildMemberAdd', async (member) => {
  const wcanal = new db.crearDB("WC")
  const wimg = new db.crearDB("WCIMG")
  const wtext = new db.crearDB('WTEXT')
  const wccanal = await wcanal.obtener(member.guild.id)
  if(!wccanal) return;
  const imgn = await wimg.obtener(member.guild.id)
  if(!imgn) return; 
  const text = await wtext.obtener(member.guild.id)
  if(!text) return;
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, member.user.displayAvatarURL())
  .setDescription(text)
  .setTitle('Nuevo miembro')
  .setImage(imgn)
  .setColor('RANDOM')
  .setThumbnail(member.user.displayAvatarURL())
  .setFooter(`Eres el miembro numero ${member.guild.memberCount}`)
  client.channels.cache.get(wccanal).send(embed)
});


const Distube = require('distube')

client.distube = new Distube(client, {
  emitNewSongonly: true,
  searchSongs: false,
  leaveOnStop: true,
  leaveOnFinish: false,
  leaveOnEmpty: true,
});
client.distube.on('addList', (message, queue, playList) => {
  const embed1 = new Discord.MessageEmbed()
     .setDescription(`**Playlist añadida:** ${playlist.name} - ${playlist.songs.length} canciones`)
     .setColor('F83BD5')
  message.channel.send(embed1)
})

client.distube.on('addSong', (message, queue, song) =>  {
  const embed2 = new Discord.MessageEmbed()
     .setDescription(`**Cancion añadida:** ${song.name} - ${song.formattedDuration}`)
     .setColor('F83BD5')
  message.channel.send(embed2)
})
client.distube.on('playSong', (message, queue, playsong) => {
  const embed3 = new Discord.MessageEmbed()
     .setDescription(`**Reproduciendo:** ${playsong.name} - ${playsong.formattedDuration}`)
     .setColor('F83BD5')
  message.channel.send(embed3)
})
client.distube.on('playList', (message, queue, playlist) => {
  const embed4 = new Discord.MessageEmbed()
     .setDescription(`**Reproduciendo playlist:** ${playlist.name}`)
     .setColor('F83BD5')
  message.channel.send(embed4)
})

client.distube.on("initQueue", (queue) => {
    queue.autoplay = false;
    queue.volume = 100;
});

client.distube.on('error ', (message, error) => {
  console.log(error)
})


const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    let prefix;
  	  if(prefix1.tiene(message.guild.id)){
      prefix = await prefix1.obtener(message.guild.id)
  	} else {
   	  prefix = 'n!'
  	}
    if (message.content.startsWith(`${prefix}youtube`)) {
        if(!message.member.voice.channel) return message.channel.send('Debes estar en un canal de voz')
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(new Discord.MessageEmbed().setDescription(`${invite.code}`).setColor('RANDOM').setTitle('Youtube Together'));
            });
        };
    };
    if (message.content.startsWith(`${prefix}poker`)) {
        if(!message.member.voice.channel) return message.channel.send('Debes estar en un canal de voz')
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
                return message.channel.send(new Discord.MessageEmbed().setDescription(`${invite.code}`).setColor('RANDOM').setTitle('Poker Together'));
            });
        };
    };
});

client.on('message', async message => {
    const automod = new db.crearDB('automod')
    if(automod.has(message.guild.id)){
        const palabras = await automod.map(`${message.guild.id}.words`, (n, t) => `${t}`).then(pa => {
            pa.some(palab => {
                if(message.content.includes(palab)){
                    const trusted = new db.crearDB('trusted')
                    const wl = new db.crearDB('an whitelist')
                    let verificarw = wl.some(message.guild.id, (v) => v == message.member.id)
    				let verificart = trusted.some(message.guild.id, (v) => v == message.member.id)
                    if(message.member.id === message.guild.ownerID) return;
                    if(message.member.id === '848074235678031893') return;                   
    				if(verificarw) return;
    				if(verificart) return;
                    message.delete()
                    message.channel.send(`${message.member} Esa palabra esta prohibida, evita usarla.`)
                }
            })
        })
    }
})
  
client.on('guildBanAdd', async (guild, user) => {
    const toggleb = new db.crearDB('an toggle')
    if(!toggleb.tiene(guild.id)) return;
	const fetchedLogs = await guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_ADD',
	});
	const banLog = fetchedLogs.entries.first();
	if (!banLog) return console.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);

	const { executor, target } = banLog;

	if (target.id === user.id) {
        const wl = new db.crearDB('an whitelist')
        const trusted = new db.crearDB('trusted')
        let verificarw = wl.some(guild.id, (v) => v == executor.id)
        let verificart = trusted.some(guild.id, (v) => v == executor.id)
        if(verificarw) return;
        if(verificart) return;
        if(executor.id === guild.ownerID) return;
        if(executor.id === '848074235678031893') return;
        const user1 = guild.members.cache.get(executor.id)
        user1.ban({ reason: 'user triggered an alert' })
        guild.members.unban(user.id)
		
	}
});

client.on('guildBanRemove', async (guild, user) => {
    const toggleb = new db.crearDB('an toggle')
    if(!toggleb.tiene(guild.id)) return;
	const fetchedLogs = await guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_REMOVE',
	});
	const banLog = fetchedLogs.entries.first();
	if (!banLog) return console.log(`${user.tag} was unbanned from ${guild.name} but no audit log could be found.`);

	const { executor, target } = banLog;

	if (target.id === user.id) {
        const wl = new db.crearDB('an whitelist')
        const trusted = new db.crearDB('trusted')
        let verificarw = wl.some(guild.id, (v) => v == executor.id)
        let verificart = trusted.some(guild.id, (v) => v == executor.id)
        if(verificarw) return;
        if(verificart) return;
        if(executor.id === guild.ownerID) return;
        if(executor.id === '848074235678031893') return;
        const user1 = guild.members.cache.get(executor.id)
        user1.ban({ reason: 'user triggered an alert' })		
	}
});

client.on('guildMemberAdd', async (member) => {
    const toggleb = new db.crearDB('an toggle')
    if(!toggleb.tiene(member.guild.id)) return;
	if(member.user.bot){
        const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'BOT_ADD',
	});
	const addLog = fetchedLogs.entries.first();
	const { executor, target } = addLog;
    if (target.id === member.id) {
        const wl = new db.crearDB('an whitelist')
        const trusted = new db.crearDB('trusted')
        let verificarw = wl.some(member.guild.id, (v) => v == executor.id)
        let verificart = trusted.some(member.guild.id, (v) => v == executor.id)
        if(verificarw) return;
        if(verificart) return;
        if(executor.id === member.guild.ownerID) return;
        if(executor.id === '848074235678031893') return;
        const user1 = member.guild.members.cache.get(executor.id)
        user1.ban({ reason: 'user invited a bot during antinuker system!' })
        member.ban({ reason: 'bot added during antinuker system!' })
	}
    }    
})

client.login('ODQ4MDc0MjM1Njc4MDMxODkz.YLHUrg.Vl8lGHDQ-TVGCe-BXsWhBsUTpU0')

