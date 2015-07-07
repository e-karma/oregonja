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
            type: 'dateiso',
            required: true
        },
        estAmt: {
            type: 'number',
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
