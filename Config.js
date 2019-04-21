class Config {
    constructor() {
        this._loginToken = 'NTYwNDI0MTY2NjU5MDYzODE4.D3zv_w.9t_N50oXt0Pq3CF-uxevbiEP6vU';
        this._googleApi = 'AIzaSyDQ0fDY9EB52E0Pt4dB2qwEJLfMRK4Il9M';
        this._database = {
            host : '127.0.0.1',
            user : 'dev',
            password : 'password',
            database : 'GraniBot'
        };
    }

    get loginToken() {
        return this._loginToken;
    }

    get googleApi() {
        return this._googleApi;
    }

    get database() {
        return this._database;
    }
}
module.exports = Config;