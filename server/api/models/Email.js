/**
 * Event.js
 *
 * @description :: Event model including many to many with users and belongs to a vendor.
 *                 Soon to include a location.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        // vendor: {
        //     model: 'vendor'
        // },

        users: {
            collection: 'user',
            via: 'emails'
        },
        // TODO: add images
        // attributes
        to: {
            type: 'string',
            required: true
        },
        from: {
            type: 'string',
            required: true
        },
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        body: {
            type: 'string',
            required: true
        }
    }
};
