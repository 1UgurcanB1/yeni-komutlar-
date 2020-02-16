const math = require('mathjs'); //npm i mathjs
const {RichEmbed} = require("discord.js") 

exports.run = async (client, message, args) => {

if (!args[0]) return message.channel.send('Lütfen hesaplamayı girin');

let resp;
try {
    resp = math.evaluate(args.join(' '));
} catch (e) {
    return message.channel.send('Üzgünüm,Lütfen geçerli bir hesaplama girin');
}

let embed = new RichEmbed()
     .setColor('RANDOM')
     .setTitle('Matematik İşlemleri')
     .addField('İşlem', `\`\`\`js\n${args.join(' ')}\`\`\``)
     .addField('Cevap', `\`\`\`js\n${resp}\`\`\``)

message.channel.send(embed);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mat', 'matematik'],
  pemlevel: 0
};

exports.help = {
  name: 'matematik',
  category: "bilgi",
  description: 'İstediğiniz hesaplamayı yapar',
  usage: 'mat <hesaplama>'
};