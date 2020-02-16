const {RichEmbed} = require('discord.js');

exports.run = function(client, message, args) {
let channel = message.guild.channels.find(c => c.name.includes(args.join(' '))) || message.mentions.channels.first() || message.guild.channels.get(args[0]) || message.channel;




// embed'ı yapalım
let embed = new RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`Kanallar | ${channel.name}`, message.guild.iconURL,null)
  .addField('Kanal İsmi', `\`${message.channel.name}\``, true)
  .addField('Kanal İd', `\`${channel.id}\``, true)
  .addField('Kanal Kategori', `\`${message.channel.parent.name}\``)
  .addField('Yapılma Tarihi', `\`${new Date(channel.createdAt).toLocaleString('en-us', { dateStyle: 'full'})}\``)
  .setFooter(`Soran: ${message.author.tag}`, message.author.displayAvatarURL)

// embed
message.channel.send(embed).then(m=> m.delete(10000));

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalbilgi'],
  permLevel: 1
};

exports.help = {
  name: 'kanalbilgi',
  category: "moderasyon",
  description: 'kanal hakkında bilgi verir.',
  usage: 'kanalbilgi <kanal>'
};