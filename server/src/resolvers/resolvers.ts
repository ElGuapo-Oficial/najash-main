import { ContextType, CitiesArgs } from './types';

const resolvers = {
    Query: {
      cities: async (parent: any, args: CitiesArgs, context: ContextType) => {
        const response = await context.dataSources.CitiesAPI.getCities();
        return response.map((obj: any) => ({
            commonName: obj.name.common,
            officialName: obj.name.official
        }));
      }
    }
  };
  
  export default resolvers;
  