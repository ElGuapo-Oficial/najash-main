import { RESTDataSource } from 'apollo-datasource-rest';

class CitiesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://restcountries.com/';
    }

    async getCities() {
        return await this.get('v3.1/all?fields=name');
    }
}

export default CitiesAPI;