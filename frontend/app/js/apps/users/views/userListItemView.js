'user strict';

const App = require('../../../app');
const ModelView = require('../../../common').ModelView;
var template = require('../templates/userListItem.tpl');

class UserListItemView extends ModelView {
    constructor(options) {
        super(options);
        this.template = template;
    }

    get className() {
        return '';
    }
}

module.exports = UserListItemView;
