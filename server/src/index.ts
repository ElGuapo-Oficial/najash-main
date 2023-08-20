import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/schema';
import resolvers from './resolvers/resolvers';
import CitiesAPI from './datasources/cities-api';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        CitiesAPI: new CitiesAPI()
    })
})

server.listen().then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at http://localhost:4000
    `)
});
