import gql from "graphql-tag";

export const ACTIVITIES_QUERY = gql`
  query {
    allActivityStreams {
      id
      data
    }
  }
`;

export const GET_CONTACTS = gql`
  query {
    allContacts {
      name
      lastName
      email
      phone
      jobTitle
      company
      birthday
      labels
      User {
        name
      }
    }
  }
`;
