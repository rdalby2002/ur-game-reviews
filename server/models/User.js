const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Import schema from Game.js
const Game = require('./Game');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String
    },
    password: {
      type: String,
      required: true,
    },
    savedGames: [Game],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user passwords
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare and validate password on log in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// When a user is queried, we also get a field called "gameCount" with the number of saved games they have
userSchema.virtual('gameCount').get(function () {
  return this.savedGames.length;
});

const User = model('User', userSchema);

module.exports = User;