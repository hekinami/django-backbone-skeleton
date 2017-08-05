'use strict';

const _ = require('underscore');
const Backbone = require('backbone');
const Application = require('../../../app');
const Controller = require('../../../common').Controller;
const UserListLayout = require('../views/userListLayout');
const UserListView = require('../views/userListView');

class UserList extends Controller {
    showList(users) {
        let layout = new UserListLayout({regions: {list: ".list"}});
        let userListView = new UserListView({collection: users});

        this.region.show(layout);
        layout.getRegion('list').show(userListView);
    }
}

module.exports = UserList;
