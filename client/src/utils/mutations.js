import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login(
  $username: String!, 
  $password: String!) {

    login(username: $username, 
    password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_GAME = gql`
  mutation saveGame($input: gameInput) {
    saveBook(input: $input) {
      _id
      username
      savedGames{
      gameId
      description
      title
      image
      link
      }
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation removeGame($gameId: ID!) {
    removeBook(gameId: $gameId) {
        _id
      username
      gameCount
      savedGames{
      gameId
      title
      description
      image
      link
      }
    }
  }
`;
