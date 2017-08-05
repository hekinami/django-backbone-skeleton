'use strict';

const CollectionView = require('../../../common').CollectionView;
const UserListItemView = require('./userListItemView');

class UserListView extends CollectionView {
    constructor(options) {
        super(options);
        this.modelView = UserListItemView;
    }

    get className() {
        return 'user-list';
    }
}

module.exports = UserListView;
