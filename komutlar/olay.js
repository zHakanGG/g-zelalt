const Discord = require('discord.js');


exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**<a:basarisiz:596887378476400651> | Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor("OLAY VAR DEDİLER GELDİK KARDEŞ HAYIRDIR " + message.author.username  )
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`http://www.diken.com.tr/wp-content/uploads/2018/02/cukur.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["olayvar , olay-var"],
  permLevel: 0
};

exports.help = {
  name: 'olay',
  description: 'Olay Yapar.',
  usage: 'olay'
};