const Drink = require('./Drink');

class Granity extends Drink {
    constructor(Stock, Price) {
        super(
            "Granité",
            "Une douce boisson fraîche que l'on peut retrouver à la foire ou à la plage, que Gilardin affectionne tout particulièrement",
            0
        );
        this.price(Price);
        this.stock(Stock);
    }
}