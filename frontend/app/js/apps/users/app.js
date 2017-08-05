'use strict';

const Application = require('../../app');
const SubApplication = require('../../common').SubApplication;
const UserList = require('./controllers/userList');
const User = require('./models/user');
const Users = require('./collections/users');

class UsersApp extends SubApplication{
    showUserList() {
        let user = new User({name: "bibo"});
        let users = new Users();
        users.add(user);
        user = new User({name: "yuer"});
        users.add(user);
        let userList = this.startController(UserList);
        userList.showList(users);
    }
}

module.exports = UsersApp;
