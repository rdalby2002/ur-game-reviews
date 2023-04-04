require('dotenv').config();
const { AuthenticationError } = require('apollo-server-express');
const { User, Game, Cover } = require('../models');
const { signToken, igdbRequest } = require('../utils/auth');
const axios = require('axios');
const { request } = require('express');
const { response } = require('express');

// const { QUERY_TOPGAMES, QUERY_NEW } = require('../../client/src/utils/queries');
// const topRatedQuery = {
//     operationName:"fetchQUERY_TOP_GAMES",
//     query: `query fetchQUERY_TOP_GAMES ${QUERY_TOP_GAMES}`,
//     variables: {}
// };
// const newReleaseQuery = {
//     operationName: "fetchQUERY_NEW",
//     query: `query fetchQUERY_NEW ${QUERY_NEW}`,
//     variables: {}
// };
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
            const users = await User.find({});
            // console.log('what is happening', users);
            return users;
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
        getTopRated: async (parent, args, context) => {
            // may need to use 'slug' for url requests
            if (context.user) { 
                const options = {
                    method: 'post',
                    url: 'https://api.igdb.com/v4/games',
                    headers: {
                        'accept': 'application/json',
                        'Client-ID': process.env.CLIENT_ID,
                        'Authorization': process.env.AUTHORIZATION
                    }
                };

                try {
                    const res = await axios
                    .request(options);
                    console.log('this is the returned data', res.data);
                    return res.data;
                } catch(e) {
                    console.error(e);
                }
                
            }
        },
       getNewRelease : async (parent, { games }, context) => {

       }

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
        // this saveGame  may need lots of editing
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