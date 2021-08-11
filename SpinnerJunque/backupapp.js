// const apiKey = "47a456ff-4d8c-4295-b487-9500e5c8cb5e";
// let endpoint;
// let country;
// let state;
// let city;
// let res;
// let json;
// let cityInfoItem;

// let badAirList1 = document.getElementById('yuck1');
// let badAirList2 = document.getElementById('yuck2');
// let badAirList3 = document.getElementById('yuck3');
// let badAirList4 = document.getElementById('yuck4');

// Fetch Countries - access country names
// async function getCountries(){
//     let countriesArr = [];

//     res = await fetch(`https://api.airvisual.com/v2/countries?key=${apiKey}`)
//     json = await res.json()
//     .catch(function(err){
//         console.log(err);
//     })

//     let countrypool = json.data;
//     for (let countryData of countrypool){
//         countriesArr.push(countryData.country);
//     };

    // let countriesIndex = countriesArr;
    // let countryItem = document.createElement('li');
    // countryItem.innerHTML = `<p> ${countriesIndex} </p>`;
    // badAirList1.appendChild(countryItem);

// };

// getCountries();




// fetch States - access state names by country
// async function getStates(country){
//     let countryArr = [];
//     country = country;
    
//     let statesAPI = `https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`;
//     res = await fetch(statesAPI)
//     json = await res.json()
//     .catch(function(err){
//         console.log(err);
//     })

//     let statespool = json.data;
//     for (let statesData of statespool){
//         countryArr.push(statesData.state);
//     };

//     let states = countryArr;
//     let stateItem = document.createElement('li');
//     stateItem.innerHTML = `<p> ${states} </p>`;
//     badAirList2.appendChild(stateItem);
// };

// getStates("USA");
// 


// Fetch Cities - access city names by country & state
// async function getCities(country, state){
//     let citiesArr = [];
//     country = country;
//     state = state;

//     let citiesAPI =`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`
//     res = await fetch(citiesAPI)
//     json = await res.json()
//     .catch(function(err){
//         console.log(err);
//     })

//     let citiespool = json.data;
//     for (let citiesData of citiespool){
//         citiesArr.push(citiesData.city)
//     };

//     let cities = citiesArr;
//     let citiesItem = document.createElement('li');
//     citiesItem.innerHTML = `<p> ${cities} </p>`;
//     badAirList3.appendChild(citiesItem);
// };

// getCities("USA", "California");
// 


// Fetch City Data - access city_data keys (country/state/city/location/current) by country, state & city
// async function getCityInfo(country, state, city){
//     let cityKeysArr = [];
//     country = country;
//     state = state;
//     city = city;

//     let cityDataAPI = `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`
//     res = await fetch(cityDataAPI)
//     json = await res.json()
//     .catch(function(err){
//         console.log(err);
//     })

    // let keysToTheCity = json.data
    // let cityLocation = keysToTheCity.location; 
    // let cityConditions = keysToTheCity.current; 
    
    // accesses City, State, Country, Location, Current
//     for (let cityKey in keysToTheCity){
//         cityKeysArr.push(cityKey);
//     };

//     let cityKeys = cityKeysArr;
//     cityInfoItem = document.createElement('li');
//     cityInfoItem.innerHTML = `<p> cityKeysArr = ${cityKeys}</p>`;
//     badAirList4.appendChild(cityInfoItem);

//     // accesses Weather, Polution from Current
//     console.log("Fingers Crossed!")
//     let cityConditionArr = [];
//     for (let cityKey in cityConditions){
//         cityConditionArr.push(cityKey);
//         let conditionKey4 = keysToTheCity.condition; // Does not return object with {weather & polution}
//         console.log(conditionKey4);
//     };

//     // does not add data to the browser page
//     let cityConditionsData = cityConditionArr;
//     cityInfoItem = document.createElement('li'); 
//     cityInfoItem.innerHTML = `<p> keysToTheCity.current.weather: ${cityConditionsData}</p>`;
//     badAirList4.appendChild(cityInfoItem); 


//     // accesses Type, Coordinates from Location
//     console.log("Toes Crossed")
//     let cityLocationArr = [];
//     for (let cityKey in cityLocation){
//         cityLocationArr.push(cityKey);
//         let locationKey4 = keysToTheCity.location; // Returns object with {type:point,coordinates:Array}
//         console.log(locationKey4);
//     };

//     // does not add data to the browser page
//     let cityLocationData = cityLocationArr;
//     cityInfoItem = document.createElement('li');
//     cityInfoItem.innerHTML =`<p>keysToTheCity.location: ${cityLocationData}</p>`
//     badAirList4.appendChild(cityInfoItem);     

// };

        
// getCityInfo("USA", "California", "Los Angeles");

// Minimized fetches //
// async function getCountries(){
//     console.log(`Getting Countries!`);
//     await fetch(`https://api.airvisual.com/v2/countries?key=${apiKey}`)
//     .then(function(response){
//         return response.json();
//     })
//     .then((data) => {
//         return data
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// };

// async function getStates(country){
//     console.log(`Getting States!`);
//     await fetch(`https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`)
//     .then(function(response){
//         return response.json();
//     })
//     .then((data) => {
//         return data
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// };

// async function getCities(country, state){
//     console.log(`Getting Cities`);
//     await fetch(`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`)
//     .then(function(response){
//         return response.json();
//     })
//     .then((data) => {
//         return data
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// };

// async function getCityInfo(country, state, city){
//     console.log(`Getting City Info!`);
//     await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`)
//     .then(function(response){
//         return response.json();
//     })
//     .then((data) => {
//         return data
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// };


// /// Bad Air Version of Ghibli Code ///
// let showHideDiv = document.querySelector('.translate-container');
// showHideDiv.setAttribute('id', 'hide-translate-container');
// let displayItems;
// let english = true; // may have to do with on/off display of divs

// let bodyWrapperImg = document.querySelector(".body-wrapper-image");
// let displayOne = document.getElementById('ul-one');
// let displayTwo = document.getElementById('ul-two');
// let displayThree = document.getElementById('ul-three');

// // accepts an event from 1 of 4 different HTML buttons and calls getFetch()
// // with different parameters based on which button is clicked.
// function chooseInput(mybutton){

//     console.log(mybutton.id);
//     switch (mybutton.id) {
//         case 'countries':
//             getStates(country);
//             break;
//         case 'cities':
//             getCities(country, state);
//             break;
//         case 'city_data':
//             getCityInfo(country, state, city);
//             break;
//         default:
//             getCountries();
//             break;
//     }
// }

// // getFetch function **Does way too much!
// // Should be refactored into multiple functions.
// //********************************
// //**** The function below would be one of the four get/Country/State/City/CityData fetches
// async function getFetch(countryInput, stateInput, cityInput){
// // function getFetch(countryInput, stateInput, cityInput){
//     if (cityInput !== null){
//         getCityInfo(countryInput, stateInput, cityInput);
//     } else if (stateInput !== null) {
//         getCities(countryInput, stateInput);
//     } else if (countryInput !== null) {
//         getStates(countryInput);
//     } else {
//         getCountries();
//     };
//     // await fetch(myParameter)
//     //     .then(function(response){
//     //         return response.json();
//     //     })
//     //     .then((data) => {
//     console.log(data.length);
//     console.log(data);

//     // Removes results from previous button before adding results from current button.
//     while (displayOne.firstChild) {
//         displayOne.removeChild(displayOne.firstChild);
//     };
//     while (displayTwo.firstChild) {
//         displayTwo.removeChild(displayTwo.firstChild);
//     };
//     while (displayThree.firstChild) {
//         displayThree.removeChild(displayThree.firstChild);
//     };

//     let count = 0
//     for (item of data){
//         count += 1;
//         console.log(count);
//         let listItem = document.createElement('li');                // CityData has keys of "current" & "location", which have their own keys. 
//         console.log(item);
//         // checks for key of 'country', if exists, uses 'country' for the key.
//         if (item.hasOwnProperty('country')) {
//             listItem.innerHTML = '<p>' + item.country + '</p>';
//             bodyWrapperImg.setAttribute('id', 'country');
        
//         // checks for key of 'state', if exists, uses 'state' for the key.
//         } else if (item.hasOwnProperty('state')) {
//             listItem.innerHTML = '<p>' + item.country + '</p>';
//             bodyWrapperImg.setAttribute('id', 'state');

//         // checks for key of 'city', if exists, uses 'city' for the key.
//         } else if (item.hasOwnProperty('city')) {
//             listItem.innerHTML = '<p>' + item.country + '</p>';
//             bodyWrapperImg.setAttribute('id', 'city');

//         // checks for key of 'location' or 'current', if exists, uses 'cityData' for the key.
//         } else if (item.hasOwnProperty('location')) {
//             listItem.innerHTML = '<p>' + item.country + '</p>';
//             bodyWrapperImg.setAttribute('id', 'cityDataLocation');
//         } else if (item.hasOwnProperty('current')) {
//             listItem.innerHTML = '<p>' + item.country + '</p>';
//             bodyWrapperImg.setAttribute('id', 'cityDataCurrent');
//         } else { 
//             console.log(`Item didn't belong`);
//         }

//         //  Based on each item's 'count', this assigns the item to one of 3 columns
//         if (count %3 === 0){
//             displayItems = document.querySelector('#ul-three');
//         } else if (count %3 === 2){
//             displayItems = document.querySelector('#ul-two');
//         } else if (count %3 === 1){
//             displayItems = document.querySelector('#ul-one');
//         }
//     }
//     displayItems.appendChild(listItem);  
// };





// // Ghibli Code //
// // URL variables
// const baseUrl = 'https://ghibliapi.herokuapp.com/';
// const filmsUrl = `${baseUrl}films`;
// const peopleUrl = `${baseUrl}people`;
// const speciesUrl = `${baseUrl}species`;
// const locationsUrl = `${baseUrl}locations`;
// const vehiclesUrl = `${baseUrl}vehicles`;

// let myUrl;
// let english = true;
// let showHideDiv = document.querySelector('.translate-container');
// showHideDiv.setAttribute('id', 'hide-translate-container');

// let displayItems;
// let bodyWrapperImg = document.querySelector(".bodyWrapperImage");
// let displayOne = document.getElementById('ul-one');
// let displayTwo = document.getElementById('ul-two');
// let displayThree = document.getElementById('ul-three');


// // accepts an event from 1 of 5 different HTML buttons and calls getFetch()
// // with different parameters based on which button is clicked.
// function chooseInput(mybutton, language){
//     console.log(mybutton.id);
//     switch (mybutton.id) {
//         case 'films':
//             getFetch(filmsUrl, 'english');
//             break;
//         case 'people':
//             getFetch(peopleUrl, 'people');
//             break;
//         case 'species':
//             getFetch(speciesUrl, 'species');
//             break;
//         case 'locations':
//             getFetch(locationsUrl, 'locations');
//             break;
//         case 'vehicles':
//             getFetch(vehiclesUrl, 'vehicles');
//             break;
//         default:
//             break;
//     }
// }


// // Determines the second parameter to pass into getFetch(),
// // which will determine which key:value will be pulled from the films API.
// function titleTranslate(transBtn){
//     switch (transBtn.id) {
//         case 'english':
//             getFetch(filmsUrl, 'english');
//             break;
//         case 'japanese':
//             getFetch(filmsUrl, 'japanese');
//             break;
//         default:
//             break;
//     }
// }


// // getFetch function **Does way too much!
// // Should be refactored into multiple functions.
// async function getFetch(myParameter, language){   
//     await fetch(myParameter)
//         .then(function(response){
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data.length);
//             console.log(data);

//             // Removes results from previous button before adding results from current button.
//             while (displayOne.firstChild) {
//                 displayOne.removeChild(displayOne.firstChild);
//             };
//             while (displayTwo.firstChild) {
//                 displayTwo.removeChild(displayTwo.firstChild);
//             };
//             while (displayThree.firstChild) {
//                 displayThree.removeChild(displayThree.firstChild);
//             };

//             let count = 0
//             for (item of data){
//                 count += 1;
//                 let listItem = document.createElement('li');
//                 // Films has a key of 'title' instead of 'name', 
//                 // checks for key of 'title', if exists, uses 'title' key instead of 'name' key.
//                 if (item.hasOwnProperty('title')) {
//                     if (language === 'english'){
//                         listItem.innerHTML = '<p>' + item.title + '</p>';
//                         bodyWrapperImg.style.backgroundImage ='url("./Assets/chihiro036.jpeg")';
//                         bodyWrapperImg.setAttribute('id', 'films-en');

//                     } else if (language === 'japanese'){
//                         listItem.innerHTML = `<p>${item.original_title} (${item.original_title_romanised})</p>`;
//                         bodyWrapperImg.style.backgroundImage = 'url("./Assets/nausicaa009.jpeg")';
//                         bodyWrapperImg.setAttribute('id', 'films-jp');
//                     }
//                     } else if (language === 'romanji'){
//                         listItem.innerHTML = '<p>' + item.original_title_romanised +  '</p>';
//                         bodyWrapperImg.style.backgroundImage = 'url("./Assets/chihiro036.jpeg")';
//                         bodyWrapperImg.setAttribute('id', 'films-en');
//                 } else {
//                     listItem.innerHTML = '<p>' + item.name + '</p>';
//                     switch (language){
//                         case 'people':
//                             bodyWrapperImg.style.backgroundImage = 'url("./Assets/nausicaa049.jpeg")';
//                             bodyWrapperImg.setAttribute('id', 'people');
//                             break;
//                         case 'species':
//                             bodyWrapperImg.style.backgroundImage = 'url("./Assets/totoro024.jpeg")';
//                             bodyWrapperImg.setAttribute('id', 'species');
//                             break;
//                         case 'locations':
//                             bodyWrapperImg.style.backgroundImage = 'url("./Assets/chihiro011.jpeg")';
//                             bodyWrapperImg.setAttribute('id', 'locations');
//                             break;
//                         case 'vehicles':
//                             bodyWrapperImg.style.backgroundImage = 'url("./Assets/ponyo039.jpeg")';
//                             bodyWrapperImg.setAttribute('id', 'vehicles');
//                             break;
//                     }
//                 }
   
//                 //  Based on each item's 'count' it assigns it to one of 3 columns
//                 if (count %3 === 0){
//                     displayItems = document.querySelector('#ul-three');
//                 } else if (count %3 === 2){
//                     displayItems = document.querySelector('#ul-two');
//                 } else if (count %3 === 1){
//                     displayItems = document.querySelector('#ul-one');
//                 }
//                 displayItems.appendChild(listItem);  
//             };

//             switch(language){
//                 case 'english':
//                     showHideDiv.setAttribute('id', 'show-translate-container');
//                     break;
//                 case 'japanese':
//                     showHideDiv.setAttribute('id', 'show-translate-container');
//                     break;
//                 case 'romanji':
//                     showHideDiv.setAttribute('id', 'show-translate-container');
//                     break;
//                 default:
//                     showHideDiv.setAttribute('id', 'hide-translate-container');
//                     break;
//                 }
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
