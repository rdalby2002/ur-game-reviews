const { Schema, default: mongoose } = require('mongoose');
const Game = require('./Game');



const coverSchema = new Schema(
    {
    url: {
        type: String,
        required: true
    },
    game: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Game',
        }
    ]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
    
);

const Cover = mongoose.model('Cover', coverSchema);

module.exports = Cover;