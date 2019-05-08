const Dice = require('../../Entity/Dice/Dice');
const Caracter = require('../../Entity/Caracter/Caracter');
const Granity = require('../../Entity/Granity/Granity');
const WhereWolf = require('../../Entity/Minigame/WereWolf/WereWolf');

class Orders{
    constructor(){
        console.log("successfully generated");
        this.result = {};
    }

    roll(diceOperation, message) {
        let rollDice = new Dice(diceOperation);
        this.result = rollDice.diceOperator();
        console.log(this.result);
        message.reply(this.result.comment + ":\n" + this.result.result);
    }

    lg(bot, message) {

    }

    order() {
        console.log("Execution de l'ordre 66");
    }

}

module.exports = Orders;