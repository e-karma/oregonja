module.exports = {

    attributes: {
        // relationships
        assignedTo: {
            model: 'user'
        },
        employee: {
            model: 'employee'
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
            type: 'dateiso'
        }
    }
};
