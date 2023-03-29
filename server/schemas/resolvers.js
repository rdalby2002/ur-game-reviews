const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/User');
const { signToken, igdbRequest } = require('../utils/auth');

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
    },

    Mutation: {
        addUser: async (parent, { name, email, password }) => {
            const profile = await User.create({ name, email, password });
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

    }
};

module.exports = resolvers;