'use strict';

const _ = require('underscore');
const $ = require('jquery');
const Backbone = require('backbone');
Backbone.$ = $;
const Region = require('./common').Region;

// Initialize all available routes
require('./apps/users/router');
require('./apps/login/router');

class DefaultRouter extends Backbone.Router {
    constructor(options) {
        super(options);
        this.routes = {
            '': 'defaultRoute'
        };
        this._bindRoutes();
    }

    defaultRoute() {
        this.navigate('users', true);
    }
}

let Application = {
    start() {
        // redirect to login page if need authentication
        Backbone.$.ajaxSetup({
            statusCode: {
                403: () =>{
                    window.location.replace('/#login');
                }
            }
        });
        
        Application.mainRegion = new Region({el: '#main'});
        
        Application.router = new DefaultRouter();
        Backbone.history.start();
    },

    startSubApplication(SubApplication) {
        if (this.currentSubapp && this.currentSubapp instanceof SubApplication) {
            return this.currentSubapp;
        }

        if (this.currentSubapp && this.currentSubapp.destroy) {
            this.currentSubapp.destroy();
        }

        this.currentSubapp = new SubApplication({region: Application.mainRegion});
        return this.currentSubapp;
    }
};

// for global events triggering and listening
_.extend(Application, Backbone.Events);

module.exports = Application;
