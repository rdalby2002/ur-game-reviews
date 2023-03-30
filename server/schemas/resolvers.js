const { AuthenticationError } = require('apollo-server-express');
const { User, Game } = require('../models');
const { signToken, igdbRequest } = require('../utils/auth');
import apicalypse from 'apicalypse';

const march = new Date('2023-03-01');
const hypeCount = 100;

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return Profile.findOne({_id: context.user.id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // here will go game requests
        // will need to add another request for the covers to get the image url
        // apicalypse has a multiquery to maybe help with covers 
        topratedgames: async (parent, { games }) => {
            const response = await apicalypse(igdbRequest)
            // may need to use 'slug' for url requests
            .fields(['id,name,first_release_date,cover,rating,summary,hypes'])
            .sort('name', 'desc')
            .limit(10)
            .where('rating > 90')
            .request('/games');

            return response(games)
        },
        newreleases: async ( parent, { games }) => {
            const response = await apicalypse(igdbRequest)
            .fields(['id,name,first_release_date,cover,rating,summary,hypes'])
            .sort('name', 'desc')
            .limit(10)
            .where(`hypes > ${hypeCount}`)
            .where(`first_release_date > ${march}`)
            .request('/games');
            
            return response(games)
        },

    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const profile = await User.create({ username, email, password });
            const token = signToken(profile);

            return { token, profile };
        },
        login: async (parent, { email, password }) => {
            const profile = await User.findOne({ email });

            if (!profile) {
                throw new AuthenticationError('Credentials are incorrect!');
            }

            const correctPw = await profile.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Credentials are incorrect!');
            }

            const token = signToken(profile);
            return { token, profile };
        },
        // this saveGame needs lots of editing
        saveGame: async (parent, { newGame }, context) => {
            if (context.user) {
                const game = new Game
            }
        },
        removeGame: async (parent, { gameId }, context) => {
            if (context.user) {
                const game = await Game.findOneAndDelete({
                    _id: gameId,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { games: game._id } }
                );

                return game;
            }
        }
    }
};

module.exports = resolvers;