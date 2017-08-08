'use strict';

const Application = require('../../app');
const SubApplication = require('../../common').SubApplication;
const UserList = require('./controllers/userList');
const User = require('./models/user');
const Users = require('./collections/users');

const sendAuthentication = function (xhr) {
    xhr.setRequestHeader('Authorization', ("Basic ".concat(sessionStorage.getItem('authtoken'))));
};

class UsersApp extends SubApplication{
    showUserList() {
        Application.trigger('loading:start');
        Application.trigger('app:users:started');

        new Users().fetch({
            success: (collection) => {
                // this.showList(collection);
                let userList = this.startController(UserList);
                userList.showList(collection);
                Application.trigger('loading:stop');
            },
            fail: (collection, response) => {
                Application.trigger('loading:stop');
                Application.trigger('server:error', response);
            },
            beforeSend: sendAuthentication 
        });
    }
}

module.exports = UsersApp;
