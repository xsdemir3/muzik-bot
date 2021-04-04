module.exports = {
    name: "geç",
    aliases: [""],
    description: "",
    usage: "geç",//komutun kullanımı
    ownerOnly: false,
    run: async (message,args,client) => {

    if(client.player.isPlaying(message.guild.id) == true) {   
        
        if(!message.guild.members.cache.get(message.author.id).voice.channel) {
            return message.channel.send("**<:dnd_:818050135463559188> Lütfen şarkı açmak için bir kanala giriş yapınız**")
        }
        
        client.player.skip(message.guild.id)
        
        return message.channel.send("**<:dnd_:818050135463559188> Şarkı başarı ile geçildi**")
    } else {
        return message.channel.send("**<:dnd_:818050135463559188> Bir şarkı çalmadan değiştiremezsiniz**")
    }
     

    }}