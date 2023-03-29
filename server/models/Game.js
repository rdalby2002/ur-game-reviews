const { Schema } = require('mongoose');

const gameSchema = new Schema({
  title: {
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
  first_release_date: {
    type: Date,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports - gameSchema;