import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      games {
        _id
      }
    }
  }
`;

export const QUERY_TOPGAMES = gql`
  query getTopRated {
    games {
      _id
     
    }
  }
`;

export const QUERY_NEW = gql`
  query getNewRelease {
      games {
        _id
      }
    }
`;
