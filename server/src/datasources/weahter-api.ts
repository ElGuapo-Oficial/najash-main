import { RESTDataSource } from 'apollo-datasource-rest';

class WeatherAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.weatherapi.com/v1/';
    }

    async getCityWeather(city) {
        return await this.get(`forecast.json?key=f84f72c01ca44f22b3f203832232705&q=${city}&aqi=no`);
    }
}

export default  WeatherAPI;