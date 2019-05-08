const Orders = require('./Orders');

class Parser extends Orders{
    constructor() {
        super();
        this.commandPrompt = ">";
        this.orders = {
            roll: this.roll,
            order: this.order,
            prompt: this.updateDefaultPrompt,
        };
    }

    updateDefaultPrompt(prompt = null) {
        this.commandPrompt = (prompt === null ? ">" : prompt);
    }

    executeCommand(command, parameters = null, message) {
        this.orders[command](parameters, message);
    }

    parseCommand(message) {
        let commandOperands = message.content.substring(1, message.length).split(' ');
        let order = commandOperands[0];
        this.executeCommand(order, commandOperands.splice(0, 1).join(' '), message);
    }

    receiveCommand(message) {
        console.log("BAD PROMPT");
        if (message[0] !== this.commandPrompt) {
            return ({
                "result": null,
                "error": {
                    "error": true,
                    "error_code": 'BAD_PROMPT',
                }
            });
        }
        this.parseCommand(message)
    }

}

module.exports = Parser;