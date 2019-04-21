class Dice{
    constructor(string) {
        this.string = string;
        this.parsedString = "";
        this.result = 0;
    }

    rollTheDice(diceType) {
        return (Math.floor(Math.random() * Math.floor(diceType)) + 1);
    }

    rollMultipleDice(numberOfDice, diceType) {
        console.log("Rolled " + numberOfDice + " dice of type " + diceType);
        let result = 0;
        while (--numberOfDice > -1) {
            result += (Math.floor(Math.random() * Math.floor(diceType)) + 1);
        }
        return result;
    }

    calculation(firstMember, secondMember, operand) {
        switch (operand) {
            case '*':
                return(parseFloat(firstMember) * parseFloat(secondMember));
            case '/':
                return(parseFloat(firstMember) / parseFloat(secondMember));
            case '+':
                return(parseFloat(firstMember) + parseFloat(secondMember));
            case '-':
                return(parseFloat(firstMember) - parseFloat(secondMember));
            case '^':
                return(parseFloat(firstMember) ** parseFloat(secondMember));
            default:
                console.log("WTF unhandled operand !");
                return(-1);
        }
    }

    deepestParenthesis(string) {
        let deep = 0;
        let deepest = 0;

        for (let i = 0; i < string.length; i++) {
            if (string[i] === '(') {
                deep++;
                if (deep > deepest) {
                    deepest = deep;
                }
            } else if (string[i] === ')') {
                deep--;
            }
        }
        return (deepest);
    }

    checkDeepestLevel(actualDeep) {
        if (actualDeep === this.deepestParenthesis(this.parsedString)) {
            return (true);
        }
        return (false);
    }

    firstDeepestIndex(deepLevel) {
        let deepCounter = 0, stringIndex = 0;
        while (deepCounter < deepLevel) {
            if (this.parsedString[stringIndex] === '(') {
                deepCounter++;
            } else if (this.parsedString[stringIndex] === ')') {
                deepCounter--;
            }
            stringIndex++;
        }
        return(stringIndex);
    }

    endingOfParenthesis(beginningIndex) {
        while (this.parsedString[beginningIndex] !== ')') {
            beginningIndex++;
        }
        return (beginningIndex);
    }

    isThereDiceOperation(operation) {
        for (let i = 0; i < operation.length; i++) {
            if (operation[i] === 'd') {
                return (true);
            }
        }
        return (false);
    }

    isThereFactorialOperation(operation) {
        for (let i = 0; i < operation.length; i++) {
            if (operation[i] === '*' || operation[i] === '/') {
                return (true);
            }
        }
        return (false);
    }

    isThereAdditionalOperation(operation) {
        for (let i = 0; i < operation.length; i++) {
            if (operation[i] === '+' || operation[i] === '-') {
                return (true);
            }
        }
        return (false);
    }

    operateLastDiceOperation(operation) {
        console.log("starting to purge " + operation + " from dice operation");
        let beginning, ending, theD, diceOperand;
        let index = operation.length, diceResult;
        while (operation[index] !== 'd') {
            index--;
        }
        theD = index;
        index--;
        while (operation[index] !== '+' && operation[index] !== '-' && operation[index] !== '/' && operation[index] !== '*' && operation[index] !== 'd' && index > 0) {
            index--;
        }
        beginning = (index === 0 ? 0 : index + 1);;
        index = theD + 1;
        while (operation[index] !== '+' && operation[index] !== '-' && operation[index] !== '/' && operation[index] !== '*' && operation[index] !== 'd' && index < operation.length) {
            index++;
        }
        ending = index;
        diceOperand = operation.substring(beginning, ending).split('d');
        diceResult = this.rollMultipleDice(parseFloat(diceOperand[0]), parseFloat(diceOperand[1]));
        operation = operation.replace(operation.substring(beginning, ending), diceResult.toString());
        return (operation);
    }

    operateFirstFactorialOperation(operation) {
        let beginning, ending, factorialOperand, factorialResult, members;
        let index = 0;
        if (!this.checkForDivideByZero()){
            return null;
        }
        console.log("starting to purge " + operation + " from factorial operation");
        while (operation[index] !== '*' && operation[index] !== '/') {
            index++;
        }
        factorialOperand = index;
        index--;
        while (operation[index] !== '+' && operation[index] !== '-' && operation[index] !== '/' && operation[index] !== '*' && index > 0) {
            index--;
        }
        beginning = (index === 0 ? 0 : index + 1);
        index = factorialOperand + 1;
        while (operation[index] !== '+' && operation[index] !== '-' && operation[index] !== '/' && operation[index] !== '*' && index < operation.length) {
            index++;
        }
        ending = index;
        members = operation.substring(beginning, ending).split(operation[factorialOperand]);
        factorialResult = this.calculation(members[0], members[1], operation[factorialOperand]);
        operation = operation.replace(operation.substring(beginning, ending), factorialResult.toString());
        return (operation);
    }

    operateFirstAdditionalOperation(operation) {
        let beginning, ending, factorialOperand, factorialResult, members;
        let index = 0;
        console.log("starting to purge " + operation + " from additional operation");
        while (operation[index] !== '+' && operation[index] !== '-') {
            index++;
        }
        factorialOperand = index;
        index--;
        while (operation[index] !== '+' && operation[index] !== '-' && index > 0) {
            index--;
        }
        beginning = (index === 0 ? 0 : index + 1);
        index = factorialOperand + 1;
        while (operation[index] !== '+' && operation[index] !== '-' && index < operation.length) {
            index++;
        }
        ending = index;
        members = operation.substring(beginning, ending).split(operation[factorialOperand]);
        factorialResult = this.calculation(members[0], members[1], operation[factorialOperand]);
        operation = operation.replace(operation.substring(beginning, ending), factorialResult.toString());
        return (operation);
    }

    operateDeepestOperation(deepLevel) {
        console.log("========= --- New Loop --- =========");
        let operation = this.parsedString, stringIndexBeginning = 0, stringIndexEnding = this.parsedString.length;
        console.log("parsed string at the beginning : " + this.parsedString);
        if (this.deepestParenthesis(this.parsedString) > 0) {
            stringIndexBeginning = this.firstDeepestIndex(deepLevel);
            stringIndexEnding = this.endingOfParenthesis(stringIndexBeginning);
            operation = this.parsedString.substring(stringIndexBeginning, stringIndexEnding);
        }
        while (this.isThereDiceOperation(operation)) {
            operation = this.operateLastDiceOperation(operation);
        }
        while (this.isThereFactorialOperation(operation)) {
            operation = this.operateFirstFactorialOperation(operation);
            if (operation === null) {
                return -1;
            }
        }
        while (this.isThereAdditionalOperation(operation)) {
            operation = this.operateFirstAdditionalOperation(operation);
        }
        this.parsedString = this.parsedString.replace(this.parsedString.substring((stringIndexBeginning === 0 ? stringIndexBeginning : stringIndexBeginning - 1), stringIndexEnding + 1), operation);
        console.log("parsed string at the end : " + this.parsedString);
        console.log("========= --- End of the loop --- =========");
        return 0;
    }

    addMultiplicationOperandOnParenthesis() {
        for (let i = 0; i < this.parsedString.length; i++) {
            if (this.parsedString[i] === '(' && parseInt(this.parsedString[i-1]) + "" !== 'NaN') {
                this.parsedString = this.parsedString.substring(0, i)
                    + '*'
                    + this.parsedString.substring(i, this.parsedString.length);
            }
        }
    }

    isThereRemainingOperands() {
        for (let i = 0; i < this.parsedString.length; i++) {
            if (this.parsedString[i] === '+'
                || this.parsedString[i] === '-'
                || this.parsedString[i] === '*'
                || this.parsedString[i] === '/'
                || this.parsedString[i] === 'd') {
                return (true);
            }
        }
        return(false);
    }

    checkForOperationFormatting() {
        for (let i = 0; i < this.parsedString.length; i++) {
            if ((this.parsedString[i] === '*'
                || this.parsedString[i] === '/'
                || this.parsedString[i] === '-'
                || this.parsedString[i] === '+'
                || this.parsedString[i] === 'd')
                && (parseInt(this.parsedString[i - 1]) + "" === "NaN"
                    || parseInt(this.parsedString[i + 1]) + "" === "NaN")
                &&
                (this.parsedString[i - 1] !== ')'
                || this.parsedString[i + 1] !== '(')
            ) {
                return false;
            } else if (parseInt(this.parsedString[i] + "" === "NaN")
                && (this.parsedString[i] !== '*'
                    && this.parsedString[i] !== '/'
                    && this.parsedString[i] !== '+'
                    && this.parsedString[i] !== '-'
                    && this.parsedString[i] !== 'd'
                    && this.parsedString[i] !== '('
                    && this.parsedString[i] !== ')')) {
                return false;
            }
        }
        return true;
    }

    checkForDivideByZero() {
        for (let i = 0; i < this.parsedString.length; i++) {
            if (this.parsedString[i] === '/' && this.parsedString[i + 1] === 0) {
                return false;
            }
        }
        return true;
    }

    diceOperator() {
        let err = 0;
        // Revoir cette ligne => ne remplace que le premier espace
        this.parsedString = this.string.replace(' ', '');
        if (!this.checkForOperationFormatting()) {
            return ({
                "result": null,
                "error": {
                    "error": true,
                    "error_code": 'BAD_FORMATTING_OPERATION',
                }
            });
        }
        this.addMultiplicationOperandOnParenthesis();
        let deepLevel = this.deepestParenthesis(this.string);
        while (deepLevel >= 0 && this.isThereRemainingOperands()) {
            err = this.operateDeepestOperation(deepLevel);
            if (err === -1) {
                return ({
                    "result": null,
                    "error": {
                        "error": true,
                        "error_code": 'DIVIDE_BY_ZERO_NOT_ALLOWED',
                    }
                });
            }
            if (!this.checkDeepestLevel(deepLevel)) {
                deepLevel--;
            }
        }
        this.result = parseFloat(this.parsedString);
        return ({
            "result": this.result,
            "error": {
                "error": false,
                "error_code": null,
            }
        });
    }
}

module.exports = Dice;
