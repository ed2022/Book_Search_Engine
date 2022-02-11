import { gql } from 'graphql-tag';  // import { gql } from '@apollo/client'; was also in the mini-p


//following Readme doc 
export const GET_ME = gql`
  {
    me {
      _id
      username
      email 
      bookCount
      savingBooks{
          bookID
          authors
          title
          description 
          image
          link
      }
    }
  }
`;
