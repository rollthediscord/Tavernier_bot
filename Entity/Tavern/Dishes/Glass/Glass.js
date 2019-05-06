class Glass {
    constructor(Cost, Capacity) {
        this._cost = Cost;
        this._stock = 0;
        this._capacity = Capacity;
        this._Cost = Cost;
        this._Capacity = Capacity;
    }

    get Cost() {
        return this._Cost;
    }

    set Cost(value) {
        this._Cost = value;
    }

    get Capacity() {
        return this._Capacity;
    }

    set Capacity(value) {
        this._Capacity = value;
    }

    get stock() {
        return this._stock;
    }

    set stock(value) {
        this._stock = value;
    }
}

module.exports = Glass;
