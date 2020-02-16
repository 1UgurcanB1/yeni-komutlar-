const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {

  if(!args.join('-')) return message.channel.send('**TRCyber|Lütfen kullanıcı adını yazın**');
    
    fetch(`https://api.github.com/users/${args.join('-')}`)
      .then(res => res.json()).then(body => {
        if(body.message) return message.channel.send(`The user: \`${args.join(' ')}\` wasn't found.`);
      let { login, avatar_url, name, id, html_url, repos_url, followers, following, location, created_at, bio } = body;

      const embed = new RichEmbed()
        .setColor('GREEN')
        .setAuthor(`${login}'ın GitHub Hesabı ile ilgili bilgiler`, avatar_url)
        .setThumbnail(avatar_url)
        .setDescription(`**İsim**: \`${name || 'bilinmiyor'}\`
        **ID**: ${id || 'Bilinmiyor'}
        **Link**: **[link](${html_url})**
        **Projeleri**: \`${repos_url.size || 0}\`
        **Takipçileri**: \`${followers || 0}\`
        **Takip Ettikleri**: \`${following || 0}\`
        **Konum**: \`${location || 'In the dark'}\`
        **Oluşturma Tarihi**: \`${new Date(created_at).toLocaleString('en-GB', { dateStyle: 'full' }) || 'Bilinmiyor'}\`
        **Bio / Açıklama**: ${bio || 'Harika şeyler yapan bir github kullanıcısı.'}`)
          return message.channel.send(embed);
      });
   }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['github'],
  pemlevel: 0
};

exports.help = {
  name: 'ascii',
  category: "eglence",
  description: 'İstediğiniz metini ascii ye çevirir',
  usage: 'ascii <metini>'
};