import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        "Get all cities"
        cities: [City!]!
    }

    type City {
        commonName: String!
        officialName: String!
    }
`;

export default typeDefs;