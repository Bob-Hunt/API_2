const apiKey = "47a456ff-4d8c-4295-b487-9500e5c8cb5e";
let endpoint;
let country;
let state;
let city;
let res;
let json;



// let country = "Japan"
// const myAPI = `https://api.airvisual.com/v2/states?country=${countryName}&key=${apiKey}`;


const countries = `https://api.airvisual.com/v2/countries?key=${apiKey}`;
// {"status":"success","data":[{"country":"Afghanistan"},{"country":"Algeria"},{"country":"Andorra"},{"country":"Angola"},{"country":"Argentina"},{"country":"Armenia"},{"country":"Australia"},{"country":"Austria"},{"country":"Bahamas"},{"country":"Bahrain"},{"country":"Bangladesh"},{"country":"Belgium"},{"country":"Bolivia"},{"country":"Bosnia Herzegovina"},{"country":"Brazil"},{"country":"Brunei"},{"country":"Bulgaria"},{"country":"Canada"},{"country":"Chile"},{"country":"China"},{"country":"Colombia"},{"country":"Croatia"},{"country":"Cyprus"},{"country":"Czech Republic"},{"country":"Democratic Republic of the Congo"},{"country":"Denmark"},{"country":"Ecuador"},{"country":"Ethiopia"},{"country":"Finland"},{"country":"France"},{"country":"Germany"},{"country":"Ghana"},{"country":"Guatemala"},{"country":"Hong Kong SAR"},{"country":"Hungary"},{"country":"India"},{"country":"Indonesia"},{"country":"Iran"},{"country":"Iraq"},{"country":"Ireland"},{"country":"Israel"},{"country":"Italy"},{"country":"Ivory Coast"},{"country":"Japan"},{"country":"Jordan"},{"country":"Kazakhstan"},{"country":"Kosovo"},{"country":"Kuwait"},{"country":"Kyrgyzstan"},{"country":"Latvia"},{"country":"Lithuania"},{"country":"Luxembourg"},{"country":"Macao SAR"},{"country":"Malaysia"},{"country":"Malta"},{"country":"Mexico"},{"country":"Mongolia"},{"country":"Myanmar"},{"country":"Nepal"},{"country":"Netherlands"},{"country":"New Caledonia"},{"country":"New Zealand"},{"country":"Nigeria"},{"country":"North Macedonia"},{"country":"Norway"},{"country":"Oman"},{"country":"Pakistan"},{"country":"Palestinian Territory"},{"country":"Peru"},{"country":"Philippines"},{"country":"Poland"},{"country":"Portugal"},{"country":"Puerto Rico"},{"country":"Romania"},{"country":"Russia"},{"country":"San Marino"},{"country":"Serbia"},{"country":"Singapore"},{"country":"Slovakia"},{"country":"Slovenia"},{"country":"South Africa"},{"country":"South Korea"},{"country":"Spain"},{"country":"Sri Lanka"},{"country":"Svalbard and Jan Mayen"},{"country":"Sweden"},{"country":"Switzerland"},{"country":"Syria"},{"country":"Taiwan"},{"country":"Thailand"},{"country":"Turkey"},{"country":"U.S. Virgin Islands"},{"country":"USA"},{"country":"Uganda"},{"country":"Ukraine"},{"country":"United Arab Emirates"},{"country":"United Kingdom"},{"country":"Uzbekistan"},{"country":"Vietnam"},{"country":"Yemen"}]}

const states = `https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`
// {"status":"success","data":[{"state":"Anhui"},{"state":"Beijing"},{"state":"Chongqing"},{"state":"Fujian"},{"state":"Gansu"},{"state":"Guangdong"},{"state":"Guangxi"},{"state":"Guizhou"},{"state":"Hainan"},{"state":"Hebei"},{"state":"Heilongjiang"},{"state":"Henan"},{"state":"Hubei"},{"state":"Hunan"},{"state":"Inner Mongolia"},{"state":"Jiangsu"},{"state":"Jiangxi"},{"state":"Jilin"},{"state":"Liaoning"},{"state":"Ningxia"},{"state":"Qinghai"},{"state":"Shaanxi"},{"state":"Shandong"},{"state":"Shanghai"},{"state":"Shanxi"},{"state":"Sichuan"},{"state":"Tianjin"},{"state":"Tibet"},{"state":"Xinjiang"},{"state":"Yunnan"},{"state":"Zhejiang"}]}

const cities = `https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`
// {"status":"success","data":[{"city":"Addison"},{"city":"Albany"},{"city":"Armonk"},{"city":"Ballston Spa"},{"city":"Brockport"},{"city":"Buffalo"},{"city":"Cairo"},{"city":"Canton"},{"city":"Carthage"},{"city":"Cheektowaga"},{"city":"Clayton"},{"city":"Dover Plains"},{"city":"Dunkirk"},{"city":"East Northport"},{"city":"Fredonia"},{"city":"Glen Cove"},{"city":"Greenport"},{"city":"Hell's Kitchen"},{"city":"Holtsville"},{"city":"Irvington"},{"city":"Ithaca"},{"city":"Johnson City"},{"city":"Katonah"},{"city":"Keeseville"},{"city":"Kings Park"},{"city":"Lake Placid"},{"city":"Lancaster"},{"city":"Manhattan"},{"city":"Middleport"},{"city":"Middletown"},{"city":"Monticello"},{"city":"Naples"},{"city":"Nassau"},{"city":"New Paltz"},{"city":"New York City"},{"city":"Newburgh"},{"city":"Newcomb"},{"city":"North Tonawanda"},{"city":"Northeast Ithaca"},{"city":"Ossining"},{"city":"Otisville"},{"city":"Piseco"},{"city":"Pittsford"},{"city":"Pleasant Valley"},{"city":"Pomona"},{"city":"Port Richmond"},{"city":"Poughkeepsie"},{"city":"Riverhead"},{"city":"Riverside"},{"city":"Rochester"},{"city":"Scarsdale"},{"city":"Shokan"},{"city":"The Bronx"},{"city":"Tonawanda"},{"city":"Utica"},{"city":"Webster"},{"city":"White Plains"},{"city":"Whitesboro"},{"city":"Williamsburg"},{"city":"Williston"},{"city":"Wilmington"},{"city":"Wynantskill"}]}

const city_data = `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`
// {"status":"success","data":{"city":"Los Angeles","state":"California","country":"USA","location":{"type":"Point","coordinates":[-118.2417,34.0669]},"current":{"weather":{"ts":"2021-08-04T00:00:00.000Z","tp":29,"pr":1011,"hu":39,"ws":3.09,"wd":280,"ic":"01d"},"pollution":{"ts":"2021-08-04T00:00:00.000Z","aqius":24,"mainus":"p2","aqicn":8,"maincn":"p2"}}}}

// *************************************
// nearest city data (IP geolocation) **
// const city_ip = `https://api.airvisual.com/v2/nearest_city?key=${apiKey}`
// {"status":"success","data":{"city":"Inashiki","state":"Ibaraki","country":"Japan","location":{"type":"Point","coordinates":[140.32356,35.95633]},"current":{"weather":{"ts":"2021-08-03T22:00:00.000Z","tp":27,"pr":1016,"hu":91,"ws":2.24,"wd":270,"ic":"03d"},"pollution":{"ts":"2021-08-04T00:00:00.000Z","aqius":17,"mainus":"p2","aqicn":6,"maincn":"p2"}}}}

// Nearest city date (GPS coordinates) **
// const city_gps = `https://api.airvisual.com/v2/nearest_city?lat=35.98&lon=140.33&key=${apiKey}`
// {"status":"success","data":{"city":"Inashiki","state":"Ibaraki","country":"Japan","location":{"type":"Point","coordinates":[140.32356,35.95633]},"current":{"weather":{"ts":"2021-08-03T22:00:00.000Z","tp":27,"pr":1016,"hu":91,"ws":2.24,"wd":270,"ic":"03d"},"pollution":{"ts":"2021-08-04T00:00:00.000Z","aqius":17,"mainus":"p2","aqicn":6,"maincn":"p2"}}}}



let badAirList1 = document.getElementById('yuck1');
let badAirList2 = document.getElementById('yuck2');
let badAirList3 = document.getElementById('yuck3');
let badAirList4 = document.getElementById('yuck4');


// // Fetch Countries
async function getCountries(){
    res = await fetch(countries)
    json = await res.json()
        
    .catch(function(err){
        console.log(err);
    })
    let countrypool = json.data;
    for (let countryData of countrypool){
        let country = countryData.country;
        let countryItem = document.createElement('li');
        countryItem.innerHTML = `<p> ${country} </p>`;
        badAirList1.appendChild(countryItem);
    };
}

getCountries();


// // fetch States
async function getStates(country){
    country = country;
    console.log(country);
    let statesAPI = `https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`;
    // console.log(`statesAPI: ${statesAPI});
    res = await fetch(statesAPI)
    console.log(res);
    json = await res.json()
        
    .catch(function(err){
        console.log(err);
    })
    let statespool = json.data;
    for (let statesData of statespool){
        let state = statesData.state;
        let stateItem = document.createElement('li');
        stateItem.innerHTML = `<p> ${state} </p>`;
        badAirList2.appendChild(stateItem);
    };
}

getStates("USA", states);


// // Fetch Cities
async function getCities(country, state){
    country = country;
    state = state;
    let citiesAPI =`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`
    res = await fetch(citiesAPI)
    json = await res.json()
        
    .catch(function(err){
        console.log(err);
    })
    let citiespool = json.data;
    for (let citiesData of citiespool){
        let city = citiesData.city;
        let citiesItem = document.createElement('li');
        citiesItem.innerHTML = `<p> ${city} </p>`;
        badAirList3.appendChild(citiesItem);
    };
}

getCities("USA", "California");


// Fetch City Data
async function getCityInfo(country, state, city){
    country = country;
    state = state;
    city = city;
    let cityDataAPI = `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`
    res = await fetch(cityDataAPI)
    json = await res.json()
    let status = json.status
    console.log(`status: ${status}`)
    let keysToTheCity = json.data
    console.log(`keysToTheCity: ${keysToTheCity}`)
    // .catch(function(err){
    //     console.log(err);

    let dataCityKeys = keysToTheCity;
    let locationCityKeys = keysToTheCity.location;
    let currentCityKeys = keysToTheCity.current;
    console.log(`currentCityKeys: ${currentCityKeys}`);

    for (let cityKey in currentCityKeys){
        console.log(`cityKey: ${cityKey}`);
        let currentKey = Object.keys(cityKey);
        let keyValue = Object.values(currentKey);
        console.log(`city stuff: ${currentKey}: ${keyValue}`);
        let cityInfoItem = document.createElement('li');
        cityInfoItem.innerHTML = `<p> ${currentKey}: ${keyValue} </p>`;
        badAirList4.appendChild(cityInfoItem);
    };
}



getCityInfo("USA", "California", "Los Angeles");

