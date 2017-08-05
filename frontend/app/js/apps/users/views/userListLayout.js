'use strict';

const Layout = require('../../../common').Layout;
const template = require('../templates/userListLayout.tpl');

class UserListLayout extends Layout {
    constructor(options) {
        super(options);
        this.template = template;
        this.regions = {
            list: '.list'
        };
    }

    get className() {
        return '';
    }
}

module.exports = UserListLayout;
