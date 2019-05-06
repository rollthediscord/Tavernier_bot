class Drink{
    constructor(Name, Desc, Strength) {
        this._Name = Name;
        this._desc = Desc;
        this._stock = 0.0;
        this._price = 0.0;
        this._strength = Strength;
    }

    get Name() {
        return this._Name;
    }

    set Name(value) {
        this._Name = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }

    get stock() {
        return this._stock;
    }

    set stock(value) {
        this._stock = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get strength() {
        return this._strength;
    }

    set strength(value) {
        this._strength = value;
    }

}

module.exports = Drink;
