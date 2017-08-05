'use strict';

const Backbone = require('backbone');
const User = require('../models/user');

class Users extends Backbone.Collection {
    constructor(options) {
        super(options);
        this.url = '/api/users';
    }

    get model() {
        return User;
    }

    parse(response) {
        return response.results;
    }
}

module.exports = Users;
