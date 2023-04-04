const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    getTopRated: [String]
    getNewRelease: [String]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, firstName: String, lastName: String, password: String!): Auth
    saveGame(gameData: GameInput!): User
    removeGame(_id: ID!): User
  }
`;

module.exports = typeDefs;