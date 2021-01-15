const API_KEY = "oue07WGJGYJFlAAMKbsJBJTAjPFyAsKh";

const getWeather = async (key) => {
    const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${key}?apikey=${API_KEY}`;
    const response = await fetch(baseUrl + query);
    const data = await response.json();
    return data[0];
}

const getCity = async (city) => {
    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${API_KEY}&q=${city}`;
    const response = await fetch(baseUrl + query);
    const data = await response.json();
    return data[0];
}

