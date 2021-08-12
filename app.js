const apiKey = "47a456ff-4d8c-4295-b487-9500e5c8cb5e";

let searchTerm
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
            dataArr.push(dataItem);
        };
        console.log(`completed the loop!`)
        continueFunction(dataArr);
    
    })
    .catch((err) => {
        console.log(err);
    })
};

async function getStates(country){
    console.log(`country: ${country}`);
    console.log(`Getting States!`);
    await fetch(`https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then((json) => {
        console.log(json.data);
        let stateObj ={};
        let countryKey = "country";
        stateObj[countryKey] = country;
        dataArr = [];
        dataArr.push(stateObj);
        for (let dataItem of json.data){
            stateObj ={};
            const stateKey = "state";
            stateObj[stateKey] = dataItem.state;
            dataArr.push(stateObj);
            // dataArr.push(`{state: "${dataItem.state}"}`);
        };
        console.log(`completed the loop!`)
        continueFunction(dataArr);
    
    })
    .catch((err) => {
        console.log(err);
    })
};

async function getCities(country, state){
    console.log(`Country: ${country}`);
    console.log(`State: ${state}`);
    console.log(`Getting Cities`);
    await fetch(`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then((json) => {
        console.log(json.data);
        let cityObj ={};
        countryKey = "country";
        cityObj[countryKey] = country;
        dataArr = [];
        dataArr.push(cityObj);
        cityObj = {};
        let stateKey = "state";
        cityObj[stateKey] = state;
        dataArr.push(cityObj);
        for (let dataItem of json.data){
        cityDataObj = {};
        let stateKey = "state";
        cityDataObj[stateKey] = state;
        dataArr.push(cityDataObj);
            // dataArr.push(`{city: "${dataItem.city}"}`);
        };
        console.log(`completed the loop!`)
        continueFunction(dataArr);
    
    })
    .catch((err) => {
        console.log(err);
    })
};

async function getCityInfo(country, state, city){
    console.log(`Country: ${country}`);
    console.log(`State: ${state}`);
    console.log(`City: ${city}`);
    console.log(`Getting City Info!`);
    await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then((json) => {
        console.log(json.data);
        dataArr = [];
        let cityInfoObj ={};
        countryKey = "country";
        cityInfoObj[countryKey] = country;
        dataArr = [];
        dataArr.push(cityInfoObj);
        cityInfoObj = {};
        let stateKey = "state";
        cityInfoObj[stateKey] = state;
        dataArr.push(cityInfoObj);
        cityInfoObj = {};
        let cityKey = "city";
        cityInfoObj[cityKey] = city;
        dataArr.push(cityInfoObj);
        for (let dataItem of json.data){
            cityInfoObj ={};
            if (dataItem.hasOwnProperty('location')){
                let locObj ={};
                const locKey = "location";
                locObj[locKey] = dataItem.location;
                dataArr.push(locObj);
            } else {
                let curObj ={};
                const curKey = "current";
                curObj[curKey] = dataItem.current;
                dataArr.push(curObj);
            }
        };
        console.log(`completed the loop!`)
        console.log(dataArr);
        continueFunction(dataArr);
    
    });
    // .catch((err) => {
    //     console.log(err);
    // });
};


/// Bad Air Version of Ghibli Code ///
let showHideDiv = document.querySelector('.translate-container');
showHideDiv.setAttribute('id', 'hide-translate-container');
let displayItems;
let english = true; // may have to do with on/off display of divs

let bodyWrapperImg = document.querySelector("bodyWrapperImage");
let displayOne = document.getElementById('ul-one');
let displayTwo = document.getElementById('ul-two');
let displayThree = document.getElementById('ul-three');

// accepts an event from 1 of 4 different HTML buttons and calls getFetch()
// with different parameters based on which button is clicked.
function chooseInput(myButton){
    // console.log(myButton.country);
    // console.log(myButton.state);
    // console.log(myButton.city);
    console.log(`Starting chooseInput function`);
    console.log(`class: ${myButton.class}`);
    console.log(`name: ${myButton.name}`);
    console.log(`Value: ${myButton.value}`);

    switch (myButton.name) {
        case 'country':
            searchTerm = myButton.value;
            getStates(searchTerm);
            break;
        case 'state':
            searchTerm = myButton.value;
            getCities(searchTerm);
            break;
        case 'city':
            searchTerm = myButton.value;
            getCityInfo(searchTerm);
            break;
        default:
            searchTerm = myButton.value;
            getCountries();
            break;
    }
}

// getFetch function **Does way too much!
// Should be refactored into multiple functions.
//********************************
//**** The function below would be one of the four get/Country/State/City/CityData fetches
async function getFetch(){
    console.log(`starting getFetch`)
    // if (myButton.class === 'country') {
    //     getStates(myButton.value);
    // } else if (myButton.class === 'state') {
    //     getCities(myButton.country,myButton.value);
    // } else if (myButton.class === 'city') {
    //     getCityData(myButton.country, myButton.state, myButton.city);
    // } else {
    getCountries();
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
        let listItem = document.createElement('input');                // CityData has keys of "current" & "location", which have their own keys. 
        // console.log(`key:${item.property}`);
        // console.log(`value:${item.country}`);
        // checks for key of 'country', if exists, uses 'country' for the key.
        if (item.hasOwnProperty('country')) {
            console.log(`Has Own Property country`);
            listItem.innerHTML = `<p>${item.country}</p>`;
            // console.log(`<p>${item.country}</p>`)
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('class', 'country');
            // listItem.setAttribute('country','yes');
            // listItem.setAttribute('state','no');
            // listItem.setAttribute('city','no');
            // listItem.setAttribute('name',`${item.country}`);
            listItem.setAttribute('name','country');
            listItem.setAttribute('value',`${item.country}`);
            // listItem.setAttribute('onclick', 'alert("Ive been clicked!")');
            listItem.setAttribute('onclick', 'chooseInput(this)');
            // console.log(`listItem: ${listItem.innerHTML}`);
            
        
        // checks for key of 'state', if exists, uses 'state' for the key.
        } else if (item.hasOwnProperty('state')) {
            console.log(`has own property state`);
            listItem.innerHTML = `<p>${item.state}</p>`;
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('class', 'state');
            // listItem.setAttribute('country','yes');
            // listItem.setAttribute('state','yes');
            // listItem.setAttribute('city','no');
            // listItem.setAttribute('name',`${item.state}`);
            listItem.setAttribute('name', 'state');
            listItem.setAttribute('value',`${item.state}`);
            // listItem.setAttribute('onclick', 'alert("Ive been clicked!")');
            listItem.setAttribute('onclick', 'chooseInput(this)');
            

        // checks for key of 'city', if exists, uses 'city' for the key.
        } else if (item.hasOwnProperty('city')) {
            listItem.innerHTML = `<p>${item.city}</p>`;
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('class', 'city');
            // listItem.setAttribute('country','yes');
            // listItem.setAttribute('state','yes');
            // listItem.setAttribute('city','yes');
            // listItem.setAttribute('name',`${item.city}`);
            listItem.setAttribute('name','city');
            listItem.setAttribute('value',`${item.city}`);
            // listItem.setAttribute('onclick', 'alert("Ive been clicked!")');
            listItem.setAttribute('onclick', 'chooseInput(this)');

        // checks for key of 'location' or 'current', if exists, uses 'cityData' for the key.
        } else if (item.hasOwnProperty('location')) {
            listItem.innerHTML = `<p>${item.country}</p>`;
            bodyWrapperImg.setAttribute('id', 'cityDataLocation');
            
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
        displayItems.appendChild(listItem);  
    }
};
