const { gql } = require('apollo-server-express');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');

const typeDefs = `#graphql
    scalar JSON
    scalar JSONObject
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    gameCount: Int
    savedGames: [Game]
  }
  
  type Game {
    _id: ID
    name: String
    summary: String
    cover: [Cover]
    hypes: Int
    first_release_date: String
    rating: Int
  }

  type Cover {
    _id: ID
    url: String
  }

  input GameInput {
    _id: ID!
    name: String!
    summary: String!
    cover: String
    first_release_date: String
    rating: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: User
    user: User
    getTopRated: JSON
    getNewRelease: JSON
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, firstName: String, lastName: String, password: String!): Auth
    saveGame(gameData: GameInput!): User
    removeGame(_id: ID!): User
  }
`;

module.exports = typeDefs;