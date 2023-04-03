require('dotenv').config();
const { AuthenticationError } = require('apollo-server-express');
const { User, Game, Cover } = require('../models');
const { signToken, igdbRequest } = require('../utils/auth');
const axios = require('axios');
const { request } = require('express');
const { response } = require('express');

let march = new Date('2023-03-01');

// let requestOptions = async function () {
//     await axios({
//     method: 'get',
//     url: 'https://api.igdb.com/v4/games',
//     auth: {
//         email: email,
//         password: password
//     },
//     headers: {
//         'accept': 'application/json',
//         'Client_ID': process.env.CLIENT_ID,
//         'Authorization': process.env.AUTHORIZATION
//     }
// })
// }


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
                return User.findOne({_id: context.user.id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // here will go game requests
        // will need to add another request for the covers to get the image url
        // apicalypse has a multiquery to maybe help with covers 
        topratedgames: async (parent, { games }) => {
            //let march = new Date('2023-03-01');
            // may need to use 'slug' for url requests
            
        },
        // newreleases: async ( parent, { games }) => {
        //     const response = await apicalypse(igdbRequest)
        //     .fields(['id,name,first_release_date,cover,rating,summary,hypes'])
        //     .sort('name', 'desc')
        //     .limit(10)
        //     .where(`hypes > 100`)
        //     .where(`first_release_date > ${march}`)
        //     .request('/games');
        //     console.log(response.data);
        //     return response.data
        // },

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
        saveGame: async (parent, { userId, game }, context) => {
            if (context.user) {
                const game = await User.findOneAndUpdate(
                    { _id: userId },
                    {
                        $addToSet: { games: game },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
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