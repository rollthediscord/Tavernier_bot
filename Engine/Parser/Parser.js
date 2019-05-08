const Orders = require('./Orders');

class Parser extends Orders{
    constructor() {
        super();
        this.commandPrompt = ">";
        this.orders = {
            roll: this.roll,
            order: this.order,
            prompt: this.updateDefaultPrompt,
            lg: this.lg,
        };
    }

    updateDefaultPrompt(prompt = null) {
        this.commandPrompt = (prompt === null ? ">" : prompt);
    }

    executeCommand(command, parameters = null, message, bot) {
        this.orders[command](parameters, message, bot);
    }

    parseCommand(message, bot) {
        let commandOperands = message.content.substring(1, message.length).split(' ');
        let order = commandOperands[0];
        this.executeCommand(order, commandOperands.splice(1, commandOperands.length - 1).join(' '), message, bot);
    }

    receiveCommand(message, bot) {
        console.log("BAD PROMPT");
        if (message.content[0] !== this.commandPrompt) {
            return ({
                "result": null,
                "error": {
                    "error": true,
                    "error_code": 'BAD_PROMPT',
                }
            });
        }
        this.parseCommand(message, bot)
    }

}

module.exports = Parser;