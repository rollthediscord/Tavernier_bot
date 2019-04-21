const Config = require('../../Config');

class EngineDatabase extends Config{
    constructor() {
        super();
        this.knex = require('knex')({
            client: 'mysql',
            connection: this.database,
        });
    }

}

module.exports = EngineDatabase;