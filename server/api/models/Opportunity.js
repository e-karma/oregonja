module.exports = {

    attributes: {
        // relationships
        user: {
            model: 'user'
        },
        vendor: {
            model: 'vendor'
        },

        // attr
        estClose: {
            type: 'datetime',
            required: true
        },
        estAmt: {
            type: 'string',
            required: true
        },
        title: {
            type: 'string'
        },
        stage: {
            type: 'string'
        }
    }
};
