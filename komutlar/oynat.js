module.exports = {
    name: "oynat",
    aliases: [""],
    description: "",
    usage: "oynat",//komutun kullanımı
    ownerOnly: false,
    run: async (message,args,client) => {

        if(!args[0]) {
            return message.channel.send("**<:dnd_:818050135463559188> Lütfen bir şarkı adı yazınız.**")
        } 

        var muzik = message.content.slice(6)


   if(client.player.isPlaying(message.guild.id) === true) {
//kuyruğa ekleme kısmı

if(!message.guild.members.cache.get(message.author.id).voice.channel) {
    return message.channel.send("**<:dnd_:818050135463559188> Lütfen şarkı açmak için bir kanala giriş yapınız.**")
}

 client.player.addToQueue(message.guild.id, muzik)

message.channel.send("**<:dnd_:818050135463559188> Başarı ile kuyruğa eklendi: **" + muzik)

   } else {
       var song = await client.player.play(message.member.voice.channel, muzik, message.member.user)
       var muzikveri = song.song;

       message.channel.send("**<:dnd_:818050135463559188> Şu an oynatılıyor: **" +muzikveri.name)

   }

    }
}