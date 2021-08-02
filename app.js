const apiKey = "47a456ff-4d8c-4295-b487-9500e5c8cb5e";
let countryName = "Japan"
const api = `http://api.airvisual.com/v2/states?country={{${countryName}}}&key={{${apiKey}}}`;


// List of supported countries
const countries = `GET 'http://api.airvisual.com/v2/countries?key={{${apiKey}}}'`

// List of supported states in a country
const states = `GET 'http://api.airvisual.com/v2/states?country=China&key={{${apiKey}}}'`

// List of supported cities in a state
const cities = `GET 'http://api.airvisual.com/v2/cities?state=New%20York&country=USA&key={{${apiKey}}}'`

// nearest city data (IP geolocation)
const city_ip = `GET 'http://api.airvisual.com/v2/nearest_city?key={{${apiKey}}}'`

// Nearest city date (GPS coordinates)
const city_gps = `GET 'http://api.airvisual.com/v2/nearest_city?lat=35.98&lon=140.33&key={{${apiKey}}}'`

// Specified city data
const city_data = `GET 'http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key={{${apiKey}}}'`

// Supported stations in a city
const city_stations = `GET 'http://api.airvisual.com/v2/stations?city=Beijing&state=Beijing&country=China&key={{${apiKey}}}'`

// Nearest station data (IP geolocation)
const station_ip = `GET 'http://api.airvisual.com/v2/nearest_station?key={{${apiKey}}}'`

// Nearest station data (GPS coordinates)
const station_gps = `GET 'http://api.airvisual.com/v2/nearest_station?lat=48.02&lon=-50.20&key={{${apiKey}}}'`

// Specified station data
const station_data = `GET 'http://api.airvisual.com/v2/station?station=US%20Embassy%20in%20Beijing&city=Beijing&state=Beijing&country=China&key={{${apiKey}}}'`

// Global city ranking
const global_city_rank = `GET 'http://api.airvisual.com/v2/city_ranking?key={{${apiKey}}}'`