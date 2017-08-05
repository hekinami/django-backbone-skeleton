'use strict';

const Backbone = require('backbone');
const User = require('../models/user');

class Users extends Backbone.Collection {
    constructor(options) {
        super(options);
        this.url = '/api/contacts';
    }

    get model() {
        return User;
    }
}

module.exports = Users;
