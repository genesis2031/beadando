module.exports = {
    identity: 'todo',
    connection: 'default',
    attributes: {
        status: {
            type: 'string',
            enum: ['new', 'done', 'in_progress'],
            required: true,
        },
        name: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        priority: {
            type: 'string',
            enum: ['Magas', 'Alacsony'],
            required: true,
        },
        date: {
            type: 'datetime',
            defaultsTo: function () { return new Date(); },
            required: true,
        },

        user: {
            model: 'user',
        },
    }
}