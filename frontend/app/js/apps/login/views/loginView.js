'user strict';

var Common = require('../../../common');
const template = require('../templates/login.tpl');

class LoginView extends Common.ModelView {
    constructor(options) {
        super(options);
        this.template = template;
    }

    get className() {
        return 'row';
    }

    get events() {
        return {
            'click button': 'makeLogin'
        };
    }

    makeLogin(event) {
        event.preventDefault();

        let username = this.$el.find('#username').val();
        let password = this.$el.find('#password').val();
        let authString = this.buildAuthString(username, password);

        sessionStorage.setItem('authtoken', authString);

        let App = require('../../../app');
        App.router.navigate('users', true);
    }

    buildAuthString(username, password) {
        return btoa(username + ':' + password);
    }
}

module.exports = LoginView; 
