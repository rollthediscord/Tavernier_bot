const Dice = require('../../Entity/Dice/Dice');
const Caracter = require('../../Entity/Caracter/Caracter');
const Granity = require('../../Entity/Granity/Granity');

class Orders{
    constructor(){
        console.log("successfully generated");
    }

    roll(diceOperation) {
        let rollDice = new Dice(diceOperation);
        this.result = rollDice.diceOperator();
    }

    order() {
        console.log("Execution de l'ordre 66");
    }

}

module.exports = Orders;