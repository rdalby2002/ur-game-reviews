import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
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
      cover
      name
      rating
      summary
      
     
    }
  }
`;

export const QUERY_NEW = gql`
  query getNewRelease {
      games {
        _id
        cover
        name
        first_release_date
        summary
      }
    }
`;

export const QUERY_MAIN = gql`
  query getNewMain {
      games {
      _id
      cover
      name
      rating
      }
    }
    `;

    export const GET_ME = gql`
      query me {
        me {
          _id
          username
          gameCount
          savedGames {
          gameId
          title
          description
          image
          link
          }
        }
      }
    `;
    
