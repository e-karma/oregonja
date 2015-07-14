module.exports = {

    attributes: {
        // relationships
        assignedTo: {
            model: 'user'
        },
        employee: {
            model: 'employee'
        },
        vendor: {
          model: 'vendor'
        },

        // attr
        name: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        dueDate: {
            type: 'datetime'
        }
    }
};
