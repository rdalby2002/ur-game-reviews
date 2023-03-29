const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    gameCount: Int
    savedGames: [Game]
  }
  
  type Game {
    _id: ID!
    name: String!
    summary: String!
    cover: String
    first_release_date: Date
    rating: Int!
  }

  input GameInput {
    _id: ID!
    name: String!
    summary: String!
    cover: String
    first_release_date: Date
    rating: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, firstName: String, lastName: String, password: String!): Auth
    saveGame(gameData: GameInput!): User
    removeGame(_id: ID!): User
  }
`;

module.exports = typeDefs;