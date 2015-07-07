/**
 * Vendor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        // relationships

        // TODO ideally the user should be many to many with vendor in the future so that different users
        // can be owners of a vendor and admin it
        user: {
            model: 'user'
        },

        employees: {
          model: 'employee'
        },

        // events: {
        //   collection: 'event',
        //   via: 'vendor'
        // },

        // attributes
        name: {
            type: 'string',
            required: true
        },

        description: {
            type: 'string'
        },
        phone: {
            type: 'string'
        },
        address: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        state: {
            type: 'array'
        },
        zip: {
            type: 'number'
        },

        email: {
            type: 'string',
            required: true
        }
        // services: {
        //     collection: 'service',
        //     via: 'vendor'
        // },
        // templates: {
        //     collection: 'template',
        //     via: 'vendor'
        // },
        // homepages: {
        //     model: 'homepage'
        // },
        // urlSegment: {
        //     type: 'string'
        // },
        // location: {
        //     type: 'json'
        // },

    }

};
