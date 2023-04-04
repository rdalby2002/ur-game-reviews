const db = require('../config/connection');
const { User, Game, Cover } = require('../models');
const userSeeds = require('./profileSeeds.json');
const gameSeeds = require('./savedGames.json');

db.once('open', async () => {
  try {
    await Game.deleteMany({});
    await User.deleteMany({});
    await Cover.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < gameSeeds.length; i++) {
      const { _id, } = await Game.create(gameSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: savedGames },
        {
          $addToSet: {
            game: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
