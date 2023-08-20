"use strict";
const { gql } = require('apollo-server');
const typeDefs = gql `
    type Query {
        "Get all cities"
        cities: [City!]!
        "Get city weather"
        cityWeather(cityName: String!): Weather!
    }

    type City {
        commonName: String!
        officialName: String!
    }

    type Weather {
        some: String
    }
`;
module.exports = typeDefs;
