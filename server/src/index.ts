import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/schema';
import resolvers from './resolvers/resolvers';
import CitiesAPI from './datasources/cities-api';
import cors from 'cors';  // Import cors

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        CitiesAPI: new CitiesAPI()
    }),
    cors: {
        origin: '*', // This allows all origins. You might want to restrict it in a production setting.
        credentials: true
    }
})

server.listen().then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at http://localhost:4000
    `)
});
