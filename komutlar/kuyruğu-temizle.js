module.exports = {
    name: "kuyruğu-temizle",
    aliases: [""],
    description: "",
    usage: "kuyruğu-temizle",//komutun kullanımı
    ownerOnly: false,
    run: async (message,args,client) => {

    if(client.player.isPlaying(message.guild.id) == true) { 
       
        if(!message.guild.members.cache.get(message.author.id).voice.channel) {
            return message.channel.send("**<:dnd_:818050135463559188> Lütfen şarkı açmak için bir kanala giriş yapınız**")
        }
        
        client.player.clearQueue(message.guild.id)
 
        return message.channel.send("**<:dnd_:818050135463559188> Şarkı listesini sıfırladım**")
        
    } else {
        return message.channel.send("**<:dnd_:818050135463559188> Şuanda bir şarkı çalmıyor**")
    }
     

    }}