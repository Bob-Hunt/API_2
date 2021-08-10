const apiKey = "47a456ff-4d8c-4295-b487-9500e5c8cb5e";
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

// Minimized fetches //
async function getCountries(){
    console.log(`Getting Countries!`);
    await fetch(`https://api.airvisual.com/v2/countries?key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then((json) => {
        console.log(json.data);
        let dataArr = [];
        for (let dataItem of json.data){
            dataArr.push(dataItem.country);
        };
        console.log(`completed the loop!`)
        continueFunction(dataArr);
    
    })
    .catch((err) => {
        console.log(err);
    })
};

async function getStates(country){
    console.log(`Getting States!`);
    await fetch(`https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then((json) => {
        console.log(json.data);
        let dataArr = [];
        for (let dataItem of json.data){
            dataArr.push(dataItem.state);
        };
        console.log(`completed the loop!`)
        continueFunction(dataArr);
    
    })
    .catch((err) => {
        console.log(err);
    })
};

async function getCities(country, state){
    console.log(`Getting Cities`);
    await fetch(`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then((json) => {
        console.log(json.data);
        let dataArr = [];
        for (let dataItem of json.data){
            dataArr.push(dataItem.city);
        };
        console.log(`completed the loop!`)
        continueFunction(dataArr);
    
    })
    .catch((err) => {
        console.log(err);
    })
};

async function getCityInfo(country, state, city){
    console.log(`Getting City Info!`);
    await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then((json) => {
        console.log(json.data);
        let dataArr = [];
        for (let dataItem of json.data){
            dataArr.push(dataItem.location);
            dataArr.push(dataItem.current);
        };
        console.log(`completed the loop!`)
        continueFunction(dataArr);
    
    })
    .catch((err) => {
        console.log(err);
    })
};


/// Bad Air Version of Ghibli Code ///
let showHideDiv = document.querySelector('.translate-container');
showHideDiv.setAttribute('id', 'hide-translate-container');
let displayItems;
let english = true; // may have to do with on/off display of divs

let bodyWrapperImg = document.querySelector(".body-wrapper-image");
let displayOne = document.getElementById('ul-one');
let displayTwo = document.getElementById('ul-two');
let displayThree = document.getElementById('ul-three');

// accepts an event from 1 of 4 different HTML buttons and calls getFetch()
// with different parameters based on which button is clicked.
function chooseInput(mybutton){
    console.log(`Starting chooseInput function`);

    console.log(mybutton.id);
    switch (mybutton.id) {
        case 'states':
            console.log(`case: states`);
            getStates(country);
            break;
        case 'cities':
            console.log(`case: cities`);
            getCities(country, state);
            break;
        case 'city_data':
            console.log(`case: city_data`);
            getCityInfo(country, state, city);
            break;
        default:
            console.log(`case: nuthin'`);
            getCountries();
            break;
    }
}

// getFetch function **Does way too much!
// Should be refactored into multiple functions.
//********************************
//**** The function below would be one of the four get/Country/State/City/CityData fetches
async function getFetch(countryInput, stateInput, cityInput){
    console.log(`starting getFetch`)
    if (countryInput !== null) {
        getCountries();
    } else if (statesInput !== null) {
        getStates(countryInput);
    } else if (cityInput !== null){        getCities(countryInput, stateInput,);
        getCities(countryInput, stateInput);
    } else {
        getCityData(countryInput, stateInput, cityInput);
    };
};
    // console.log(`Back to getFetch! Woo!`)
    // console.log(data.length);
    // console.log(data);
    // let myData = data;
    // console.log(`myData: ${myData}`)
async function continueFunction(dataArr){
    console.log(`continueFunction`);
    console.log(dataArr);
    // Removes results from previous button before adding results from current button.
    while (displayOne.firstChild) {
        displayOne.removeChild(displayOne.firstChild);
    };
    while (displayTwo.firstChild) {
        displayTwo.removeChild(displayTwo.firstChild);
    };
    while (displayThree.firstChild) {
        displayThree.removeChild(displayThree.firstChild);
    };
    console.log(`Finished getting rid of the children!`)    
    
    let count = 0;
    console.log(count);
    for (item of dataArr){
        console.log(item);
        count += 1;
        console.log(count);
        let listItem = document.createElement('li');                // CityData has keys of "current" & "location", which have their own keys. 
        console.log(item);
        // checks for key of 'country', if exists, uses 'country' for the key.
        if (item.hasOwnProperty('country')) {
            listItem.innerHTML = '<p>' + item.country + '</p>';
            bodyWrapperImg.setAttribute('id', 'country');
            break;
        
        // checks for key of 'state', if exists, uses 'state' for the key.
        } else if (item.hasOwnProperty('state')) {
            listItem.innerHTML = '<p>' + item.country + '</p>';
            bodyWrapperImg.setAttribute('id', 'state');
            break;

        // checks for key of 'city', if exists, uses 'city' for the key.
        } else if (item.hasOwnProperty('city')) {
            listItem.innerHTML = '<p>' + item.country + '</p>';
            bodyWrapperImg.setAttribute('id', 'city');
            break;

        // checks for key of 'location' or 'current', if exists, uses 'cityData' for the key.
        } else if (item.hasOwnProperty('location')) {
            listItem.innerHTML = '<p>' + item.country + '</p>';
            bodyWrapperImg.setAttribute('id', 'cityDataLocation');
            break;
        } else if (item.hasOwnProperty('current')) {
            listItem.innerHTML = '<p>' + item.country + '</p>';
            bodyWrapperImg.setAttribute('id', 'cityDataCurrent');
            break;
        } else { 
            console.log(`Item didn't belong`);
            break;
        }

        //  Based on each item's 'count', this assigns the item to one of 3 columns
        if (count %3 === 0){
            displayItems = document.querySelector('#ul-three');
        } else if (count %3 === 2){
            displayItems = document.querySelector('#ul-two');
        } else if (count %3 === 1){
            displayItems = document.querySelector('#ul-one');
        }
    }
    // displayItems.appendChild(listItem);  
};
