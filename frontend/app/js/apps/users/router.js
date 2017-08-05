'use strict';

const Backbone = require('backbone');

class UsersRouter extends Backbone.Router {
    constructor(options) {
        super(options);

        this.routes = {
            'users': 'showUserList',
            'users/page/:page': 'showUserList'
        };

        this._bindRoutes();
    }

    showUserList(page) {
        const app = this.startApp();
        page = page || 1;
        page = page > 0 ? page :1;
        app.showUserList(page);
    }

    startApp() {
        const Application = require('../../app');
        const UsersApp = require('./app');
        return Application.startSubApplication(UsersApp);
    }
}

module.exports = new UsersRouter();
