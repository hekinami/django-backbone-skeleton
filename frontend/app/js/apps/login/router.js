'use strict';

const Backbone = require('backbone');
const LoginView = require('./views/loginView');

class LoginRouter extends Backbone.Router {
    constructor(options) {
        super(options);
        this.routes = {
            'login': 'showLogin'
        };
        this._bindRoutes();
    }

    showLogin() {
        var App = require('../../app');
        var login = new LoginView();
        App.mainRegion.show(login);
    }
}

module.exports = new LoginRouter();
