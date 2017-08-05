'use strict';

const _ = require('underscore');
const Backbone = require('backbone');

class User extends Backbone.Model {
    constructor(options) {
        super(options);
        this.urlRoot = '/api/users';
    }
}

module.exports = User;
