const Discord = require('discord.js');
const Parser = require('./Engine/Parser/Parser');
const Config = require('./Config');

class Client extends Config{
    constructor() {
        super();
        this.bot = new Discord.Client();
        this.commandParser = new Parser();
        this.loginAction();
    }
    
    loginAction() {
        this.bot.login(this.loginToken);
        this.setBotOperation();
    }
    
    setBotOperation() {
        this.bot.on('ready', function() {
            console.log("Je suis connecté !");
        });

        this.bot.on('message', message => {
            console.log(message.content);
            this.commandParser.receiveCommand(message ,this.bot);
            // let sender = message.author;
            // try {
            //    sender.send("test");
            //} catch (e) {
            //    console.log(e);
            //}
        });

        this.bot.on('guildMemberAdd', member => {
            member.createDM().then(channel => {
                return channel.send('Jui grognon');
            }).catch(console.error)
            // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
        });

    }
}

new Client();
