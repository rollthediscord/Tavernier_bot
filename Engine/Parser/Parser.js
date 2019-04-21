const DataBase = require('../Database/EngineDatabase');
const Orders = require('./Orders');

class Parser extends Orders{
    constructor() {
        super();
        this.database = new DataBase();
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

    executeCommand(command, parameters = null) {
        this.orders[command](parameters);
    }

    parseCommand(commandOperands) {
        commandOperands = commandOperands.split(' ');
        let order = commandOperands[0];
        this.executeCommand(order, commandOperands.splice(0, 1).join(' '));
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
        this.parseCommand(message.substring(1, message.length))
    }

}

module.exports = Parser;