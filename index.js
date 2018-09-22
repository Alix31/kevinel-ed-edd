const botconfig = require("./botconfig.json");
const Discord = require("discord.js");


const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", () => {
  console.log(`[INFO]: BOT-ul 'Rolf' a pornit cu succes! ${bot.users.size} utilizatori in ${bot.channels.size} canale din ${bot.guilds.size} servere.`);
  bot.user.setActivity(`pe capra de Victor pe ${bot.guilds.size} servere`);
});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let guild = client.guilds.find("name", "Discord.js Official");

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let messagecount = parseInt(args[1]) || 1;

  exports.run = async (bot, message, args) => {
    function checkBots(guild) {
      let botCount = 0; // This is value that we will return
      guild.members.forEach(member => { // We are executing this code for every user that is in guild
        if(member.user.bot) botCount++; // If user is a bot, add 1 to botCount value
      });
      return botCount; // Return amount of bots
    }

    function checkMembers(guild) {
      let memberCount = 0;
      guild.members.forEach(member => {
        if(!member.user.bot) memberCount++; // If user isn't bot, add 1 to value.
      });
      return memberCount;
    }

    let embed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL) // Will set text on top of embed to <guild name> - Informations, and will place guild icon next to it
      .setColor('#f4df42') // Will set color of embed
      .addField('Server owner', message.guild.owner, true) // Will add in-line field with server owner
      .addField('Server region', message.guild.region, true) // Will add in-line field with server region
      .addField('Channel count', message.guild.channels.size, true) // Will add in-line field with total channel count
      .addField('Total member count', message.guild.memberCount) // Will add in-line field with total member count
      // Now we will use our methods that we've created before
      .addField('Humans', checkMembers(message.guild), true)
      .addField('Bots', checkBots(message.guild), true)
      // We also can add field with verification level of guild
      .addField('Verification level', message.guild.verificationLevel, true)
      // And now, we can finally add footer and timestamp
      .setFooter('Guild created at:')
      .setTimestamp(message.guild.createdAt); // Will set timestamp to date when guild was created

      // And now we can send our embed
      return message.channel.send(embed);
  }

  exports.help =
  {
    name: 'serverinfo'
  }

  //COMENZI BOT
  if(cmd === `${prefix}info`)
  {
    message.channel.send({embed: {
        color: 16711901,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `INFORMATII`,
        description: `Salut <@${message.author.id}>!Sunt Victor '[:goat:]' aici ai informatii folositoare!\n[:goat:] spune ca urmatoarele comenzi pot fi folosite:\n`,
        thumbnail: {
            url: 'https://i.imgur.com/m28TSs5.png',
        },
        fields: [{
            name: "General",
            value: `[:goat:] poti folosii -> /botinfo\n[:goat:] poti folosii -> /info\n [:goat:] poti folosii -> /serverinfo\n [:goat:] poti folosii -> /avatar\n`
          },
          {
            name: "STAFF",
            value: `[:goat:] poti folosii -> /sterge\n[:goat:] poti folosii -> /skemavictor(in lucru)\n`
          },
          {
            name: "Other",
            value: `[:goat:] saluut <@${message.author.id}>! Sper ca nu o sa te dai la Rolf!`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "© Rolf"
        }
      }
    });
  }
  if(cmd === `${prefix}botinfo`)
  {
    message.channel.send({embed: {
        color: 16711901,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `INFORMATII BOT`,
        description: `[:goat:] Salut <@${message.author.id}>!Sunt Victor '[:goat:]' aici ai informatii despre mine!\n`,
        thumbnail: {
            url: 'https://i.imgur.com/m28TSs5.png',
        },
        fields: [{
            name: "General",
            value: `[:goat:] Acest BOT este facut din placere, daca ne v-om gandii sa il hostam va v-om anunta!\n[:goat:] Daca ai o propunere o poti face la unul dintre Developeri.\n`
          },
          {
            name: "Invitatie",
            value: `[:goat:] daca doresti acest BOT pe server-ul tau il poti contacta pe <@228581018519601152>\n`
          },
          {
            name: "Developeri",
            value: `[:goat:] Creator & Developer <@228581018519601152>\n[:goat:] Support & Developer <@231713052712632331>\n`
          },
          {
            name: "Versiunea",
            value: `[:goat:] versiunea lui 'Rolf' este v0.0.5!`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "© Rolf"
        }
      }
    });
  }
  if(cmd === `${prefix}serverinfo`)
  {
    message.channel.send({embed: {
        color: 16711901,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `INFORMATII SERVER`,
        description: `[:goat:] salut <@${message.author.id}>!Sunt Victor '[:goat:]' aici ai informatii despre acest server!\n`,
        thumbnail: {
            url: 'https://i.imgur.com/m28TSs5.png',
        },
        fields: [{
            name: "General",
            value: `[:goat:] Acest server a fost creat de ${message.guild.members.get("228581018519601152")} la data de \n${message.guild.createdAt}.\n`
          },
          {
            name: "Discord SID",
            value: `[:goat:] SID-ul acestui server este ${message.guild.id}.\n`
          },
          {
            name: "Regiune Server",
            value: `[:goat:] Serverul se afla in ${message.guild.region}.\n`
          },
          {
            name: "Developeri",
            value: `[:goat:] Creator & Developer <@228581018519601152>\n[:goat:] Support & Developer <@231713052712632331>\n`
          },
          {
            name: "Roluri Server",
            value: `[:goat:] Serverul se afla in ${message.guild.region}.\n`
          },
          {
            name: "BOT Server",
            value: `[:goat:] BOT ${message.guild.members.tag}.\n`
          },
          {
            name: "Membrii",
            value: `[:goat:] Numarul total de membrii pe acest server este de ${message.guild.memberCount}.`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "© Rolf"
        }
      }
    });
  }
  if(cmd === `${prefix}avatar`)
  {
    if (!message.mentions.users.size)
    {
        return message.channel.send(`<@${message.author.id}> avataru' tau este asta : ${message.author.displayAvatarURL}`);
    }
    const avatarList = message.mentions.users.map(user =>
      {
        return `<@${message.author.id}> acu o sa vezi avataru' lu' uratul de ${user.username}: ${user.displayAvatarURL}`;
    });
    message.channel.send(avatarList);
  }
  //COMENZI STAFF
  if(cmd === `${prefix}sterge`)
  {
    const deleteCount = parseInt(args[0], 10);
    if(message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES") )
    {
      if(!deleteCount || deleteCount < 1 || deleteCount > 99)  return message.channel.send(`[:goat:] <@${message.author.id}>, taranule poti sterge de la 1 la 99 mesaje.`);
      if(!args[0]) return message.channel.send(`[:goat:] <@${message.author.id}>, taranule daca vrei sa stergi scrie si tu '/sterge 100' doamne degeaba ai PC.`);
      message.channel.bulkDelete(args[0], 10).then(() =>
      {
       message.channel.send(`[:goat:] au fost sterse ${args[0]} de mesaje, mama da mult mai scrieti ma bulangiilor, dar la scoala nu va place.`);
      })
    }
    else
    {
      message.channel.send(`<@${message.author.id}> fermierule, n-ai acces, fa si tu rost de un grad de bastan ;)`);
    }
  }

  if(cmd === `${prefix}skemavictor`)
  {
    if(message.channel.permissionsFor(message.author).hasPermission("ADMINISTRATOR"))
    {
      message.channel.send(`${message.member.user.tag}`);
    }
  }
  if(message.content.startsWith("//inrole")){
      let roleName = message.content.split(" ").slice(1).join(" ");

      //Filtering the guild members only keeping those with the role
      //Then mapping the filtered array to their usernames
      let membersWithRole = message.guild.members.filter(member => {
          return member.roles.find("name", roleName);
      }).map(member => {
          return member.user.username;
      })

      let embed = new discord.RichEmbed({
          "title": `Users with the ${roleName} role`,
          "description": membersWithRole.join("\n"),
          "color": 0xFFFF
      });

      return message.channel.send({embed});
  }
  //AUTO DETECT
  if(message.isMentioned(bot.users.get(`<@490881018778091542>`)))
  {
    if(message.channel.permissionsFor(message.author).hasPermission(`ADMINISTRATOR`) )
    {
      message.channel.send(`<@${message.author.id}> mare om, mare caracter mancati-as gurita ta!`);
    }
    else
    {
      message.channel.send(`<@${message.author.id}> fermierule, nu mai da mention in pula mea ca ma-ta-i curva!`);
    }
  }
  if(message.content === `@here`)
  {
    if(message.channel.permissionsFor(message.author).hasPermission(`ADMINISTRATOR`) )
    {
      message.channel.send(`<@${message.author.id}> mare om, mare caracter mancati-as gurita ta!`);
    }
    else
    {
      message.channel.send(`<@${message.author.id}> fermierule, nu mai da @here sau @everyone ca ma-ta-i curva!`);
    }
  }
  if(message.content === `@everyone`)
  {
    if(message.channel.permissionsFor(message.author).hasPermission(`ADMINISTRATOR`) )
    {
      message.channel.send(`<@${message.author.id}> mare om, mare caracter mancati-as gurita ta!`);
    }
    else
    {
      message.channel.send(`<@${message.author.id}> fermierule, nu mai da @here sau @everyone ca ma-ta-i curva!`);
    }
  }
  if(message.content === `bugged`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `BUGGED`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `WHITE`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `White`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `Bugged`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `white`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `black`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `Black`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `blue`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `BLUE`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `Blue`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `BLACK`)
  {
    message.channel.send(`Spart si dat helpere la tot serverul la 300 on.`);
  }
  if(message.content === `Andrei`)
  {
    message.channel.send(`Cum pula mea m-a creeat nici eu nu stiu.. :(`);
  }
  if(message.content === `ANDREI`)
  {
    message.channel.send(`Cum pula mea m-a creeat nici eu nu stiu.. :(`);
  }
  if(message.content === `andrei`)
  {
    message.channel.send(`Cum pula mea m-a creeat nici eu nu stiu.. :(`);
  }
  if(message.content === `alexiane`)
  {
    message.channel.send(`A luat practic Developer pe pile ca nu stie nimic.`);
  }
  if(message.content === `ALEXIANE`)
  {
    message.channel.send(`A luat practic Developer pe pile ca nu stie nimic.`);
  }
  if(message.content === `Alexiane`)
  {
    message.channel.send(`A luat practic Developer pe pile ca nu stie nimic.`);
  }
  if(message.content === `awake`)
  {
    message.channel.send(`Merge secundele?`);
  }
  if(message.content === `AWAKE`)
  {
    message.channel.send(`Merge secundele?`);
  }
  if(message.content === `Awake`)
  {
    message.channel.send(`Merge secundele?`);
  }
  if(message.content === `shad0w`)
  {
    message.channel.send(`Pai ce-ai facut, ma Ionele? Probleme cu somnu, te-am pus sa-ti faci temele.`);
  }
  if(message.content === `SHAD0W`)
  {
    message.channel.send(`Pai ce-ai facut, ma Ionele? Probleme cu somnu, te-am pus sa-ti faci temele.`);
  }
  if(message.content === `Shad0w`)
  {
    message.channel.send(`Pai ce-ai facut, ma Ionele? Probleme cu somnu, te-am pus sa-ti faci temele.`);
  }
  if(message.content === `renko`)
  {
    message.channel.send(`Deci tu stii cum activezi renko? Fii atent, il bagi asa, dai pe el, dai asa acolo si apesi F3 si dai la paint... Niciunu nu poate sa te ia.`);
  }
  if(message.content === `Renko`)
  {
    message.channel.send(`Deci tu stii cum activezi renko? Fii atent, il bagi asa, dai pe el, dai asa acolo si apesi F3 si dai la paint... Niciunu nu poate sa te ia.`);
  }
  if(message.content === `RENKO`)
  {
    message.channel.send(`Deci tu stii cum activezi renko? Fii atent, il bagi asa, dai pe el, dai asa acolo si apesi F3 si dai la paint... Niciunu nu poate sa te ia.`);
  }
  if(message.content === `tibi`)
  {
    message.channel.send(`Te paste puscaria, Tibi. Lasa minorele in pace, fmmmm.`);
  }
  if(message.content === `TIBI`)
  {
    message.channel.send(`Te paste puscaria, Tibi. Lasa minorele in pace, fmmmm.`);
  }
  if(message.content === `Tibi`)
  {
    message.channel.send(`Te paste puscaria, Tibi. Lasa minorele in pace, fmmmm.`);
  }
  if(message.content === `v2`)
  {
    message.channel.send(`v2 nu se mai vinde. Cumparati CheatsTW v0.3 sau v4.`);
  }
  if(message.content === `V2`)
  {
    message.channel.send(`v2 nu se mai vinde. Cumparati CheatsTW v0.3 sau v4.`);
  }
  if(message.content === `v4`)
  {
    message.channel.send(`v4 il poti cumpara cu 10e de la pHeNOMz0r#1337 pe Discord.`);
  }
  if(message.content === `V4`)
  {
    message.channel.send(`v4 il poti cumpara cu 10e de la pHeNOMz0r#1337 pe Discord.`);
  }
  if(message.content === `v0.3`)
  {
    message.channel.send(`CheatsTW v0.3.6 il poti cumpara cu 10e de la xpd#8724/luckyluciano#9926 pe Discord.`);
  }
  if(message.content === `V0.3`)
  {
    message.channel.send(`CheatsTW v0.3.6 il poti cumpara cu 10e de la xpd#8724/luckyluciano#9926 pe Discord.`);
  }
  if(message.content === `nephrite`)
  {
    message.channel.send(`Cemi place serveru lu Awake!`);
  }
  if(message.content === `NEPHRITE`)
  {
    message.channel.send(`Cemi place serveru lu Awake!`);
  }
  if(message.content === `Nephrite`)
  {
    message.channel.send(`Cemi place serveru lu Awake!`);
  }
  if(message.content === `jade`)
  {
    message.channel.send(`Cemi place serveru lu Awake!`);
  }
  if(message.content === `Jade`)
  {
    message.channel.send(`Cemi place serveru lu Awake!`);
  }
  if(message.content === `JADE`)
  {
    message.channel.send(`Cemi place serveru lu Awake!`);
  }
  if(message.content === `ruby`)
  {
    message.channel.send(`Cemi place serveru lu Awake!`);
  }
  if(message.content === `RUBY`)
  {
    message.channel.send(`Cemi place serveru lu Awake!`);
  }
  if(message.content === `Ruby`)
  {
    message.channel.send(`Cemi place serveru lu Awake!`);
  }
  if(message.content === `T4p`)
  {
    message.channel.send(`Acolo nu venim.`);
  }
  if(message.content === `T4P`)
  {
    message.channel.send(`Acolo nu venim.`);
  }
  if(message.content === `t4p`)
  {
    message.channel.send(`Acolo nu venim.`);
  }
  if(message.content === `90 65`)
  {
    message.channel.send(`Nu e problema de razboi, nu vorbesc aiure capitane, nu vorbesc aiurea, nu e problema de razboi!`);
  }
  if(message.content === `t4p`)
  {
    message.channel.send(`Acolo nu venim.`);
  }
  if(message.content === `update`)
  {
    message.channel.send(`Probabil o sa fie un update in viitor mane.`);
  }
  if(message.content === `UPDATE`)
  {
    message.channel.send(`Probabil o sa fie un update in viitor mane.`);
  }
  if(message.content === `Update`)
  {
    message.channel.send(`Probabil o sa fie un update in viitor mane.`);
  }
  if(message.content === `${bot.username}`)
  {
    message.send(`Te drq`)
  }

})

bot.login(botconfig.token);
