class Caracter{
    constructor() {
        this.skills = {
          "Force": 0,
          "Perception": 0,
          "Constitution": 0,
          "Charisme": 0,
          "Intelligence": 0,
          "Agilite": 0,
          "Chance": 0,
        };
        this.health = {
          "vie": 0,
          "vieMax": 0,
          "mental": 0,
          "mentalMax": 0,
        };
    }
}

module.exports = Caracter;
