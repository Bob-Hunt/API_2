// const apiKey = "47a456ff-4d8c-4295-b487-9500e5c8cb5e";
let endpoint;
let country;
let state;
let city;
let res;
let json;
let cityInfoItem;

let badAirList1 = document.getElementById('yuck1');
let badAirList2 = document.getElementById('yuck2');
let badAirList3 = document.getElementById('yuck3');
let badAirList4 = document.getElementById('yuck4');


// Fetch Countries - access country names
async function getCountries(){
    let countriesArr = [];

    res = await fetch(`https://api.airvisual.com/v2/countries?key=${apiKey}`)
    json = await res.json()
    .catch(function(err){
        console.log(err);
    })

    let countrypool = json.data;
    for (let countryData of countrypool){
        countriesArr.push(countryData.country);
    };

    let countries = countriesArr;
    let countryItem = document.createElement('li');
    countryItem.innerHTML = `<p> ${countries} </p>`;
    badAirList1.appendChild(countryItem);
};

getCountries();
// 


// fetch States - access state names by country
async function getStates(country){
    let countryArr = [];
    country = country;
    
    let statesAPI = `https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`;
    res = await fetch(statesAPI)
    json = await res.json()
    .catch(function(err){
        console.log(err);
    })

    let statespool = json.data;
    for (let statesData of statespool){
        countryArr.push(statesData.state);
    };

    let states = countryArr;
    let stateItem = document.createElement('li');
    stateItem.innerHTML = `<p> ${states} </p>`;
    badAirList2.appendChild(stateItem);
};

getStates("USA");
// 


// Fetch Cities - access city names by country & state
async function getCities(country, state){
    let citiesArr = [];
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
        citiesArr.push(citiesData.city)
    };

    let cities = citiesArr;
    let citiesItem = document.createElement('li');
    citiesItem.innerHTML = `<p> ${cities} </p>`;
    badAirList3.appendChild(citiesItem);
};

getCities("USA", "California");
// 


// Fetch City Data - access city_data keys (country/state/city/location/current) by country, state & city
async function getCityInfo(country, state, city){
    let cityKeysArr = [];
    country = country;
    state = state;
    city = city;

    let cityDataAPI = `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`
    res = await fetch(cityDataAPI)
    json = await res.json()
    .catch(function(err){
        console.log(err);
    })

    let keysToTheCity = json.data
    let cityLocation = keysToTheCity.location; 
    let cityConditions = keysToTheCity.current; 
    
    // accesses City, State, Country, Location, Current
    for (let cityKey in keysToTheCity){
        cityKeysArr.push(cityKey);
    };

    let cityKeys = cityKeysArr;
    cityInfoItem = document.createElement('li');
    cityInfoItem.innerHTML = `<p> cityKeysArr = ${cityKeys}</p>`;
    badAirList4.appendChild(cityInfoItem);

    // accesses Weather, Polution from Current
    console.log("Fingers Crossed!")
    let cityConditionArr = [];
    for (let cityKey in cityConditions){
        cityConditionArr.push(cityKey);
        let conditionKey4 = keysToTheCity.condition; // Does not return object with {weather & polution}
        console.log(conditionKey4);
    };

    // does not add data to the browser page
    let cityConditionsData = cityConditionArr;
    cityInfoItem = document.createElement('li'); 
    cityInfoItem.innerHTML = `<p> keysToTheCity.current.weather: ${cityConditionsData}</p>`;
    badAirList4.appendChild(cityInfoItem); 


    // accesses Type, Coordinates from Location
    console.log("Toes Crossed")
    let cityLocationArr = [];
    for (let cityKey in cityLocation){
        cityLocationArr.push(cityKey);
        let locationKey4 = keysToTheCity.location; // Returns object with {type:point,coordinates:Array}
        console.log(locationKey4);
    };

    // does not add data to the browser page
    let cityLocationData = cityLocationArr;
    cityInfoItem = document.createElement('li');
    cityInfoItem.innerHTML =`<p>keysToTheCity.location: ${cityLocationData}</p>`
    badAirList4.appendChild(cityInfoItem);     

};

        
getCityInfo("USA", "California", "Los Angeles");
     
