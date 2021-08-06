// const apiKey = "47a456ff-4d8c-4295-b487-9500e5c8cb5e";
let country = "Japan"
// const myAPI = `https://api.airvisual.com/v2/states?country=${countryName}&key=${apiKey}`;


// List of supported countries
const countries = `https://api.airvisual.com/v2/countries?key=${apiKey}`;
// {"status":"success","data":[{"country":"Afghanistan"},{"country":"Algeria"},{"country":"Andorra"},{"country":"Angola"},{"country":"Argentina"},{"country":"Armenia"},{"country":"Australia"},{"country":"Austria"},{"country":"Bahamas"},{"country":"Bahrain"},{"country":"Bangladesh"},{"country":"Belgium"},{"country":"Bolivia"},{"country":"Bosnia Herzegovina"},{"country":"Brazil"},{"country":"Brunei"},{"country":"Bulgaria"},{"country":"Canada"},{"country":"Chile"},{"country":"China"},{"country":"Colombia"},{"country":"Croatia"},{"country":"Cyprus"},{"country":"Czech Republic"},{"country":"Democratic Republic of the Congo"},{"country":"Denmark"},{"country":"Ecuador"},{"country":"Ethiopia"},{"country":"Finland"},{"country":"France"},{"country":"Germany"},{"country":"Ghana"},{"country":"Guatemala"},{"country":"Hong Kong SAR"},{"country":"Hungary"},{"country":"India"},{"country":"Indonesia"},{"country":"Iran"},{"country":"Iraq"},{"country":"Ireland"},{"country":"Israel"},{"country":"Italy"},{"country":"Ivory Coast"},{"country":"Japan"},{"country":"Jordan"},{"country":"Kazakhstan"},{"country":"Kosovo"},{"country":"Kuwait"},{"country":"Kyrgyzstan"},{"country":"Latvia"},{"country":"Lithuania"},{"country":"Luxembourg"},{"country":"Macao SAR"},{"country":"Malaysia"},{"country":"Malta"},{"country":"Mexico"},{"country":"Mongolia"},{"country":"Myanmar"},{"country":"Nepal"},{"country":"Netherlands"},{"country":"New Caledonia"},{"country":"New Zealand"},{"country":"Nigeria"},{"country":"North Macedonia"},{"country":"Norway"},{"country":"Oman"},{"country":"Pakistan"},{"country":"Palestinian Territory"},{"country":"Peru"},{"country":"Philippines"},{"country":"Poland"},{"country":"Portugal"},{"country":"Puerto Rico"},{"country":"Romania"},{"country":"Russia"},{"country":"San Marino"},{"country":"Serbia"},{"country":"Singapore"},{"country":"Slovakia"},{"country":"Slovenia"},{"country":"South Africa"},{"country":"South Korea"},{"country":"Spain"},{"country":"Sri Lanka"},{"country":"Svalbard and Jan Mayen"},{"country":"Sweden"},{"country":"Switzerland"},{"country":"Syria"},{"country":"Taiwan"},{"country":"Thailand"},{"country":"Turkey"},{"country":"U.S. Virgin Islands"},{"country":"USA"},{"country":"Uganda"},{"country":"Ukraine"},{"country":"United Arab Emirates"},{"country":"United Kingdom"},{"country":"Uzbekistan"},{"country":"Vietnam"},{"country":"Yemen"}]}

// List of supported states in a country (China)**
// const states = `https://api.airvisual.com/v2/states?country=China&key=${apiKey}`
// {"status":"success","data":[{"state":"Anhui"},{"state":"Beijing"},{"state":"Chongqing"},{"state":"Fujian"},{"state":"Gansu"},{"state":"Guangdong"},{"state":"Guangxi"},{"state":"Guizhou"},{"state":"Hainan"},{"state":"Hebei"},{"state":"Heilongjiang"},{"state":"Henan"},{"state":"Hubei"},{"state":"Hunan"},{"state":"Inner Mongolia"},{"state":"Jiangsu"},{"state":"Jiangxi"},{"state":"Jilin"},{"state":"Liaoning"},{"state":"Ningxia"},{"state":"Qinghai"},{"state":"Shaanxi"},{"state":"Shandong"},{"state":"Shanghai"},{"state":"Shanxi"},{"state":"Sichuan"},{"state":"Tianjin"},{"state":"Tibet"},{"state":"Xinjiang"},{"state":"Yunnan"},{"state":"Zhejiang"}]}
const states = `https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`


// List of supported cities in a state (New York)**
// const cities = `https://api.airvisual.com/v2/cities?state=New%20York&country=USA&key=${apiKey}`
// {"status":"success","data":[{"city":"Addison"},{"city":"Albany"},{"city":"Armonk"},{"city":"Ballston Spa"},{"city":"Brockport"},{"city":"Buffalo"},{"city":"Cairo"},{"city":"Canton"},{"city":"Carthage"},{"city":"Cheektowaga"},{"city":"Clayton"},{"city":"Dover Plains"},{"city":"Dunkirk"},{"city":"East Northport"},{"city":"Fredonia"},{"city":"Glen Cove"},{"city":"Greenport"},{"city":"Hell's Kitchen"},{"city":"Holtsville"},{"city":"Irvington"},{"city":"Ithaca"},{"city":"Johnson City"},{"city":"Katonah"},{"city":"Keeseville"},{"city":"Kings Park"},{"city":"Lake Placid"},{"city":"Lancaster"},{"city":"Manhattan"},{"city":"Middleport"},{"city":"Middletown"},{"city":"Monticello"},{"city":"Naples"},{"city":"Nassau"},{"city":"New Paltz"},{"city":"New York City"},{"city":"Newburgh"},{"city":"Newcomb"},{"city":"North Tonawanda"},{"city":"Northeast Ithaca"},{"city":"Ossining"},{"city":"Otisville"},{"city":"Piseco"},{"city":"Pittsford"},{"city":"Pleasant Valley"},{"city":"Pomona"},{"city":"Port Richmond"},{"city":"Poughkeepsie"},{"city":"Riverhead"},{"city":"Riverside"},{"city":"Rochester"},{"city":"Scarsdale"},{"city":"Shokan"},{"city":"The Bronx"},{"city":"Tonawanda"},{"city":"Utica"},{"city":"Webster"},{"city":"White Plains"},{"city":"Whitesboro"},{"city":"Williamsburg"},{"city":"Williston"},{"city":"Wilmington"},{"city":"Wynantskill"}]}
// const cities = `https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`

// nearest city data (IP geolocation) **
// const city_ip = `https://api.airvisual.com/v2/nearest_city?key=${apiKey}`
// {"status":"success","data":{"city":"Inashiki","state":"Ibaraki","country":"Japan","location":{"type":"Point","coordinates":[140.32356,35.95633]},"current":{"weather":{"ts":"2021-08-03T22:00:00.000Z","tp":27,"pr":1016,"hu":91,"ws":2.24,"wd":270,"ic":"03d"},"pollution":{"ts":"2021-08-04T00:00:00.000Z","aqius":17,"mainus":"p2","aqicn":6,"maincn":"p2"}}}}
const city_ip = `https://api.airvisual.com/v2/nearest_city?key=${apiKey}`

// Nearest city date (GPS coordinates) **
// const city_gps = `https://api.airvisual.com/v2/nearest_city?lat=35.98&lon=140.33&key=${apiKey}`
// {"status":"success","data":{"city":"Inashiki","state":"Ibaraki","country":"Japan","location":{"type":"Point","coordinates":[140.32356,35.95633]},"current":{"weather":{"ts":"2021-08-03T22:00:00.000Z","tp":27,"pr":1016,"hu":91,"ws":2.24,"wd":270,"ic":"03d"},"pollution":{"ts":"2021-08-04T00:00:00.000Z","aqius":17,"mainus":"p2","aqicn":6,"maincn":"p2"}}}}
// const city_gps = `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${apiKey}`


// Specified city data (Los Angeles)**
// const city_data = `https://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=${apiKey}`
// {"status":"success","data":{"city":"Los Angeles","state":"California","country":"USA","location":{"type":"Point","coordinates":[-118.2417,34.0669]},"current":{"weather":{"ts":"2021-08-04T00:00:00.000Z","tp":29,"pr":1011,"hu":39,"ws":3.09,"wd":280,"ic":"01d"},"pollution":{"ts":"2021-08-04T00:00:00.000Z","aqius":24,"mainus":"p2","aqicn":8,"maincn":"p2"}}}}
// const city_data = `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`


// function getFetch(apiKey, countryName){
console.log(apiKey);
// console.log(`myAPI: ${myAPI}`);
console.log(`countries: ${countries}`);
// console.log(`country: ${countryName}`);
console.log(`states: ${states}`);
// console.log(`cities: ${cities}`);
// console.log(`city_ip: ${city_ip}`);
// console.log(`city_gps: ${city_gps}`);
// console.log(`city_data: ${city_data}`);

let badAirList = document.querySelector('ul');



fetch(countries)
    .then(function(response){
        return response.json()
    })

    .catch(function(err){
        console.log(err);
    })

    .then(function(json){
        console.log(`json.status: ${json.status}`);
        // console.log(`json.data[3].country: ${json.data[3].country}`);
        // console.log(`json: ${json}`);
        // console.log(`json.data[3]: ${json.data[3]}`);

        // console.log('end');
        let datapool = json.data;
        for (let dataItem of datapool){
            console.log(`dataItem.country: ${dataItem.country}`);
            let country = dataItem.country;
            let listItem = document.createElement('li');
            listItem.innerHTML = `<p> ${country} </p>`;
            badAirList.appendChild(listItem);
        };

    });

// async function getBadAir(country){

//     try{
//         const response = await fetch(states)
//         const result = await response.json()
//     .then(function(response){
//         console.log(`json: ${json}`);
//         return response.json();
//     })
//     .catch(function(err){
//         console.log(err);
//     })
//     await (function(json){
//         let statePool = json.data;

//         for (let stateData of statePool){
//             let state = stateData.state;
//             let stateItem = document.createElement('li');
//             stateItem.innerHTML = `<p>${state}</p>`;
//             document.getElementById('yuck').appendChild(stateItem);
//         }
//     });
// }
// finally{console.log(`done`)}
// }
