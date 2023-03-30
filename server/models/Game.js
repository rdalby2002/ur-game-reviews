const { Schema, default: mongoose } = require('mongoose');

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
  },
  hypes: {
    type: String,
  },
  first_release_date: {
    type: Date,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports - Game;