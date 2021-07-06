const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help", 
  alias: ['ayuda'], 

execute (client, message, args){
    const db = require('megadb')
    const off = new db.crearDB('offed')
   const server = message.guild.id
   let verificaroff = off.some(server, (v) => v == message.member.id)
   if(verificaroff) return;
  const embedmain = new Discord.MessageEmbed()
  .setTitle('Categorias')
  .setDescription('`Antinuke` **|** `Mod` **|** `Utilidad` **|** `Musica` **|** `Logs` ')
  .setColor('F83BD5')
  .setFooter('Usa help <categoria> para obtener la lista de comandos')  
  
  const embedan = new Discord.MessageEmbed()
  .setColor('F83BD5')
  .setDescription('**__Antinuke__**\n`Info`**|**`Whitelist`**|**`Lockdown`**|**`lock`**|**`unlock`')
  .setFooter('Usa help <comando> para obtener informacion sobre el comando')
  
  const embedmod = new Discord.MessageEmbed()
  .setColor('F83BD5')
  .setDescription('**__Moderacion__**\n`Clear`**|**`Trust`**|**`Role`**|**`Snipe`**|**`Editsnipe`**|**`ignore`**|**`Automod`**|**`off`**|**`on`')
  .setFooter('Usa help <comando> para obtener informacion sobre el comando')
  
  const embedutil = new Discord.MessageEmbed()
.setDescription('**__Utilidad__**\n`Ping`**|**`Emotesteal`**|**`Avatar`**|**`Icon`**|**`Banner`**|**`Setprefix`**|**`User`**|**`Perms`**|**`Roles`**|**`Server`**|**`Ascii`**|**`Definicion`**|**`Math`**|**`RandomUser`**|**`Youtube`**|**`Poker`')
  .setColor('F83BD5')
  .setFooter('Usa help <comando> para obtener informacion sobre el comando')
  
  const embedmusic = new Discord.MessageEmbed()
.setDescription('**__Musica__**\n`Play`**|**`Pause`**|**`Continue`**|**`Disconnect`**|**`Autoplay`**|**`Queue`**|**`Skip`**|**`Shuffle`**|**`Loop`**|**`Airhorn`**|**`np`')
  .setColor('F83BD5')
  .setFooter('Usa help <comando> para obtener informacion sobre el comando')
  
  const embedlogs = new Discord.MessageEmbed()
  .setDescription('**__Logs__**\n`Exitlogs`')
  .setColor('F83BD5')
  .setFooter('Usa help <comando> para obtener informacion sobre el comando')
   
   const comando = args[0]
   if(!comando){
   message.channel.send(embedmain)
   }
   if(comando === 'Antinuke'){
       message.channel.send(embedan)
   }
    if(comando === 'antinuke'){
       message.channel.send(embedan)
   }
    if(comando === 'Mod'){
       message.channel.send(embedmod)
   }
    if(comando === 'mod'){
       message.channel.send(embedmod)
   }
    if(comando === 'utilidad'){
       message.channel.send(embedutil)
   }
    if(comando === 'Utilidad'){
       message.channel.send(embedutil)
   }
    if(comando === 'Musica'){
       message.channel.send(embedmusic)
   }
    if(comando === 'musica'){
       message.channel.send(embedmusic)
   }
    if(comando === 'Logs'){
       message.channel.send(embedlogs)
   }
    if(comando === 'logs'){
       message.channel.send(embedlogs)
   }
    
    ///////////////////////           COMANDOS      ///////////////////////////////
   if(comando === 'info'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Info Antinuke__**\nEste comando es bastante complejo, checa la documentacion en: ')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Info'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Info Antinuke__**\nEste comando es bastante complejo, checa la documentacion en: ')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Whitelist'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Whitelist__**')
       .addField('** **', [
           '**Alias**\n`Wl`',
           '**Parametros**\n`add || del || list`',
           '**Uso**\n`wl add @fatand || wl del @fatand || wl list`',
           '**Función**\n`Whitelistea a un usuario haciendolo inmune al antinuke`',
       ])
       .setFooter('El comando funciona por ids')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'whitelist'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Whitelist__**')
       .addField('** **', [
           '**Alias**\n`Wl`',
           '**Parametros**\n`add || del || list`',
           '**Uso**\n`wl add @fatand || wl del @fatand || wl list`',
           '**Función**\n`Whitelistea a un usuario haciendolo inmune al antinuke`',
       ])
       .setFooter('El comando funciona por ids')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'lockdown'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Lockdown__**\nEste comando es bastante complejo, checa la documentacion aquí: ')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Lockdown'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Lockdown__**\nEste comando es bastante complejo, checa la documentacion aquí: ')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Lock'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Lock-channel__**')
       .addField('** **', [
           '**Alias**\n`lc`',
           '**Parametros**\n`mensajes || view\nUsa el parametro view para que no puedan ver el canal`',
           '**Uso**\n`lc || lc view`',
           '**Función**\n`Lockea un canal segun el parametro dado`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
     if(comando === 'lock'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Lock-channel__**')
       .addField('** **', [
           '**Alias**\n`lc`',
           '**Parametros**\n`mensajes || view\nUsa el parametro view para que no puedan ver el canal`',
           '**Uso**\n`lc || lc view`',
           '**Función**\n`Lockea un canal segun el parametro dado`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
     if(comando === 'Unlock'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Unlock-channel__**')
       .addField('** **', [
           '**Alias**\n`unlock`',
           '**Parametros**\n`mensajes || view\nUsa el parametro view para que puedan ver el canal`',
           '**Uso**\n`unlock || unlock view`',
           '**Función**\n`Deslockea un canal segun el parametro dado`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'unlock'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Unlock-channel__**')
       .addField('** **', [
           '**Alias**\n`unlock`',
           '**Parametros**\n`mensajes || view\nUsa el parametro view para que puedan ver el canal`',
           '**Uso**\n`unlock || unlock view`',
           '**Función**\n`Deslockea un canal segun el parametro dado`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'clear'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Clear__**')
       .addField('** **', [
           '**Alias**\`nc`',
           '**Parametros**\n`@member || cantidad\nUsa el parametro member para borrar mensajes de ese usuario especifico`',           
           '**Uso**\n`c @fatand 10 || c 10`',
           '**Función**\n`Borra mensajes, maximo 100`',
       ])
       .setFooter('Este comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Clear'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Clear__**')
       .addField('** **', [
           '**Alias**\`nc`',
           '**Parametros**\n`@member || cantidad\nUsa el parametro member para borrar mensajes de ese usuario especifico`',           
           '**Uso**\n`c @fatand 10 || c 10`',
           '**Función**\n`Borra mensajes, maximo 100`',
       ])
       .setFooter('Este comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'trust'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Encargar__**')
       .addField('** **', [
           '**Alias**\n`trust`',
           '**Parametros**\n`add || del || list`',           
           '**Uso**\n`trust add @fatand || trust del @fatand || list`',
           '**Función**\n`Da acceso a un usuario a los comandos antinuke`',
           '**Para mas informacion checa la documentacion**'
       ])
       .setFooter('Este comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Trust'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Encargar__**')
       .addField('** **', [
           '**Alias**\n`trust`',
           '**Parametros**\n`add || del || list`',           
           '**Uso**\n`trust add @fatand || trust del @fatand || list`',
           '**Función**\n`Da acceso a un usuario a los comandos antinuke`',
           '**Para mas informacion checa la documentacion**'
       ])
       .setFooter('Este comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'role'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Role__**')
       .addField('** **', [
           '**Alias**\n`rol`',
           '**Parametros**\n`give || remove || list`',           
           '**Uso**\n`role give @fatand @role || role remove @fatand @role || role list`',
           '**Función**\n`Da o remueve roles a un usuario, el paramatro list da la lista de los roles del server`',
       ])
       .setFooter('Este comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Role'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Role__**')
       .addField('** **', [
           '**Alias**\n`rol`',
           '**Parametros**\n`give || remove || list`',           
           '**Uso**\n`role give @fatand @role || role remove @fatand @role || role list`',
           '**Función**\n`Da o remueve roles a un usuario, el paramatro list da la lista de los roles del server`',
       ])
       .setFooter('Este comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'snipe'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Snipe__**')
       .addField('** **', [
           '**Alias**\n`sp`',
           '**Parametros**\n`#channel`',    
           '**Uso**\n`sp #general || sp`',
           '**Función**\n`Muestra los mensajes recientemente borrados en ese canal`',
       ])
       .setFooter('Este comando tambien funciona por mencion')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Snipe'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Snipe__**')
       .addField('** **', [
           '**Alias**\n`sp`',
           '**Parametros**\n`#channel`',    
           '**Uso**\n`sp #general || sp`',
           '**Función**\n`Muestra los mensajes recientemente borrados en ese canal`',
       ])
       .setFooter('Este comando tambien funciona por mencion')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Editsnipe'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Editsnipe__**')
       .addField('** **', [
           '**Alias**\n`esp`',
           '**Parametros**\n`#channel`',    
           '**Uso**\n`sp #general || sp`',
           '**Función**\n`Muestra los mensajes recientemente editados en ese canal`',
       ])
       .setFooter('Este comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Automod'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Automod__**')
       .addField('** **', [
           '**Alias**\n`blacklist`',
           '**Parametros**\n`add | Añade una palabra a la blacklist`\n`del | Borra una palabra de la blacklist`\n`list | Muestra las palabras blacklisteadas`',    
           '**Uso**\n`automod add p*ta || automod del p*ta || automod list`',
           '**Función**\n`Este comando actua como moderador automatico, si alguien envia un mensaje con una palabra de la lista, esta se borrara automaticamente, este sistema no afecta a administradores o miembros whitelisteados`',
           '**Nota**\n`Puedes inmunizar a un miembro usando el comando whitelist.`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'off'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__off__**')
       .addField('** **', [
           '**Parametros**\n`<@user> || <user id>`',    
           '**Uso**\n`off @fatand`',
           '**Función**\n`Funciona parecido a el comando mute, dejando hablar al miembro pero borrando los mensajes`',
           '**Nota**\n`Un usuario en estado off no puede usar comandos de nana.`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'On'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__On__**')
       .addField('** **', [
           '**Parametros**\n`<@user> || <user id>`',    
           '**Uso**\n`on @fatand`',
           '**Función**\n`Le quita a un usuario el off`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Ignore'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Ignore__**')
       .addField('** **', [
           '**Parametros**\n`on || off`',    
           '**Uso**\n`ignore on || ignore off`',
           '**Función**\n`Desactiva los comandos en ese servidor`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'ignore'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Ignore__**')
       .addField('** **', [
           '**Parametros**\n`on || off`',    
           '**Uso**\n`ignore on || ignore off`',
           '**Función**\n`Desactiva los comandos en ese servidor`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'ping'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Ping__**\n`Muestra la latencia del bot`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Ping'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Ping__**\n`Muestra la latencia del bot`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Emotesteal'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__EmoteSteal__**')
       .addField('** **', [
           '**Parametros**\n`<nombre>`',    
           '**Uso**\n`emotesteal`<:nana_huelesrico:843358517687091241>`<nombre>(opcional)`',
           '**Función**\n`Añade el emoji recibido al servidor`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'avatar'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Avatar__**')
       .addField('** **', [
           '**Alias**\n`pfp`',
           '**Parametros**\n`@member || <member id>`',    
           '**Uso**\n`pfp @fatand || pfp 752336035228418059`',
           '**Función**\n`Muestra la foto de perfil de un usuario`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Avatar'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Avatar__**')
       .addField('** **', [
           '**Alias**\n`pfp`',
           '**Parametros**\n`@member || <member id>`',    
           '**Uso**\n`pfp @fatand || pfp 752336035228418059`',
           '**Función**\n`Muestra la foto de perfil de un usuario`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'icon'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Icon__**\n`Muestra el icono del server`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Icon'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Icon__**\n`Muestra el icono del server`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'banner'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Icon__**\n`Muestra el banner del server`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Banner'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Icon__**\n`Muestra el banner del server`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'setprefix'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__SetPrefix__**\n`Cambia el prefix en ese servidor`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Setprefix'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__SetPrefix__**\n`Cambia el prefix en ese servidor`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'user'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__User__**')
       .addField('** **', [
           '**Alias**\n`info`',
           '**Parametros**\n`@member || <member id>`',    
           '**Uso**\n`info @fatand || info 752336035228418059`',
           '**Función**\n`Muestra informacion de un usuario`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'User'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__User__**')
       .addField('** **', [
           '**Alias**\n`info`',
           '**Parametros**\n`@member || <member id>`',    
           '**Uso**\n`info @fatand || info 752336035228418059`',
           '**Función**\n`Muestra informacion de un usuario`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'roles'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Roles__**')
       .addField('** **', [
           '**Alias**\n`userroles`',
           '**Parametros**\n`@member || <member id>`',    
           '**Uso**\n`roles @fatand || roles 752336035228418059`',
           '**Función**\n`Muestra los roles de un usuario`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Roles'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Roles__**')
       .addField('** **', [
           '**Alias**\n`userroles`',
           '**Parametros**\n`@member || <member id>`',    
           '**Uso**\n`roles @fatand || roles 752336035228418059`',
           '**Función**\n`Muestra los roles de un usuario`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Perms'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Perms__**')
       .addField('** **', [
           '**Alias**\n`userperms`',
           '**Parametros**\n`@member || <member id>`',    
           '**Uso**\n`roles @fatand || roles 752336035228418059`',
           '**Función**\n`Muestra los permisos de un usuario`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'perms'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Perms__**')
       .addField('** **', [
           '**Alias**\n`userperms`',
           '**Parametros**\n`@member || <member id>`',    
           '**Uso**\n`roles @fatand || roles 752336035228418059`',
           '**Función**\n`Muestra los permisos de un usuario`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Ascii'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Ascii__**')
       .addField('** **', [
           '**Uso**\n`Ascii hello`',
           '**Función**\n`Muestra la palabra establecida en texto ascii`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Math'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Math__**')
       .addField('** **', [
           '**Uso**\n`Math 12 + 1`',
           '**Función**\n`Realiza operaciones matematicas`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Definicion'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__Definicion__**')
       .addField('** **', [
           '**Uso**\n`Definicion <palabra> || EJ: Definicion Ajolote`',
           '**Función**\n`Muestra informacion sobre la palabra recibida, si la hay`',
       ])
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'server'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Server__**\n`Muestra informacion sobre el servidor`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Server'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Server__**\n`Muestra informacion sobre el servidor`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'randomuser'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Random User__**\n`Da el nombre de un miembro aleatorio`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Randomuser'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Random User__**\n`Da el nombre de un miembro aleatorio`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'exitlogs'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__ExitLogs__**')
       .addField('** **', [
           '**Parametros**\n`set || del`',    
           '**Uso**\n`exitlogs set #logs || exitlogs del #channel`',
           '**Función**\n`Da informacion sobre un usuario que abandone el servidor`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Exitlogs'){
       const i = new Discord.MessageEmbed()
       .setTitle('**__ExitLogs__**')
       .addField('** **', [
           '**Parametros**\n`set || del`',    
           '**Uso**\n`exitlogs set #logs || exitlogs del #channel`',
           '**Función**\n`Da informacion sobre un usuario que abandone el servidor`',
       ])
       .setFooter('El comando tambien funciona por id')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'play'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Play__**\n`Reproduce una cancion por nombre o por link`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'play'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Play__**\n`Reproduce una cancion por nombre o por link`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Pause'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Pause__**\n`Pausa la playlist`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'pause'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Pause__**\n`Pausa la playlist`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'continue'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Continue__**\n`Continua la playlist`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Continue'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Continue__**\n`Continua la playlist`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'skip'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Skip__**\n`Salta la cancion actual`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Skip'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Skip__**\n`Salta la cancion actual`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'autoplay'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Autoplay__**\n`Reproduce canciones aun despues de terminar la playlist`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'autoplay'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Autoplay__**\n`Reproduce canciones aun despues de terminar la playlist`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'disconnect'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Disconnect__**\n`Desconecta al bot del canal`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Disconnect'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Disconnect__**\n`Desconecta al bot del canal`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'loop'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Loop__**\n`Usa el comando 1 vez para poner en repeticion la cancion, usalo 2 veces para poner en repeticion la playlist, o usalo 3 veces para desactivar el loop`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Loop'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Loop__**\n`Usa el comando 1 vez para poner en repeticion la cancion, usalo 2 veces para poner en repeticion la playlist, o usalo 3 veces para desactivar el loop`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'shuffle'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Shuffle__**\n`Pone en aleatorio la playlist`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Shuffle'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Shuffle__**\n`Pone en aleatorio la playlist`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Airhorn'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Airhorn__**\n`Reproduce el sonido de una bocina`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'airhorn'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Airhorn__**\n`Reproduce el sonido de una bocina`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'queue'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Queue__**\n`Muestra la playlist actual`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'np'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Now Playing__**\n`Muestra la cancion actual`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Queue'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Queue__**\n`Muestra la playlist actual`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Youtube'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Youtube__**\n`Envia un link para reproducir youtube en discord`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
    if(comando === 'Poker'){
       const i = new Discord.MessageEmbed()
       .setDescription('**__Poker__**\n`Envia un link para jugar poker en discord`')
       .setColor('F83BD5')
       message.channel.send(i)
   }
 }

} 