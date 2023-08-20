// types.ts
import { DataSource } from 'apollo-datasource';

export interface CitiesAPIInterface extends DataSource {
  getCities: () => Promise<any[]>;
}

export type ContextType = {
  dataSources: {
    CitiesAPI: CitiesAPIInterface;
  };
};

export type CitiesArgs = {};