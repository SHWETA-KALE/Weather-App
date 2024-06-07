import axios from 'axios';

const API_KEY = '64f3da5fea5a83d55883d5fc0c4b6bba';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async(city) =>{
    try {
        let response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('error while calling the api', error.message);
        return error.response
    }
}