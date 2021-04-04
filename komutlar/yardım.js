const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RED')
.addField('<:sar:827521569894957077> Yardım Menüsü',`

**<:dnd_:818050135463559188> !oynat** :
**<:dnd_:818050135463559188> !geç** :
**<:dnd_:818050135463559188> !kuyruk** : 
**<:dnd_:818050135463559188> !kapat** : 
**<:dnd_:818050135463559188> !kuyruk-temizle** : 

 `)
.setImage("https://cdn.discordapp.com/attachments/827514079391645696/828260894147739698/SL_x.gif")
.setThumbnail(client.user.avatarURL())
.setFooter('Altyapı ve destek sunucumuz için !destek')
 message.channel.send(yardım) 

  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: "yardım-müzik",// komutun kullanımı
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};