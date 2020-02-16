const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let store = args.slice(0).join('%20');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + store;
        if(!store)return message.channel.send("Lütfen çevirmek istediğin yazıyı yaz.")
        if(!link)return message.channel.send("Algılanamadı.")
        let embed = new Discord.RichEmbed()
    
    .setColor("RED")
    .setTimestamp()
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter("Çeviri");
          
    message.channel.send(embed);
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çevir'],
  permLevel: 0,
};

exports.help = {
  name: 'talep',
  category: "eglence",
  description: 'Destek talebi açar.',
  usage: 'c!talep'
};
