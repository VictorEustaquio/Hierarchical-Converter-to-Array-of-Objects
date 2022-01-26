const mongoose = require('mongoose');

//const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;

module.exports = {
    schema_file_system: mongoose.model('file_system', {
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true,

        },
        isDirectory: {
            type: Boolean
        },
        parent: {
            type: String,
        },
        root: {
            type: Number,
            ref:'file_system'
        },

    }, 'file_system'),
}