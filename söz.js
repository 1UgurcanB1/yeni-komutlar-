
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
    args.song = args.join(' ');

const lyric = require('../ek/lyrics')/*ek-lyrics.js diye klasör kullanacaksınız ve birazdan atacağım kodu oraya atacaksınız
const valpha = require('bwapi');
const lyrics = new valpha({
  headers: {
    'User-Agent': 'TRCyber'
  }
});

module.exports = (path, options) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await lyrics.request(path, options);

      resolve(response);
    }
    catch (e) {
      reject(e);
    }
  });
};
*/ 
  
  let yanıt = await lyric(`/song/${args.song}`);
 
  if (yanıt.error) {
    const embed = new Discord.RichEmbed()
    .setColor(0x36393E)
    .setTitle('Bulunamadı.')
    .setDescription(`**${args.song}** adında lyrics bulunamadı. Doğru şarkıyı aradığına eminsen arama terimine şarkı sahibinide ekle ve yeniden dene.`)
    return await message.channel.send(embed);
  }
const bmended = new Discord.RichEmbed()
.setColor(0x36393E)
.setAuthor(yanıt.artist.name, yanıt.artist.image)
.setTitle(yanıt.name)
.setDescription(yanıt.lyrics.length > 2048
               ? `${yanıt.lyrics.substring(0,2045)}...`
               : yanıt.lyrics)
.setThumbnail(yanıt.image)
  await message.channel.send(bmended);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['söz'],
  permLevel: 0  
};


exports.help = {
  name: 'söz',
  description: 'Belirtilen şarkının sözlerini atar.',
  category: 'eglence',
  usage: 'lyrics [ŞARKI] [ARTIST]',
};