class Granity{
    constructor() {
        this.stock = 1000;
    }

    consumme() {
        this.stock = this.stock - 1;
    }
}

module.exports = Granity;