const apiKey = "47a456ff-4d8c-4295-b487-9500e5c8cb5e";

let searchTerm

// Country/State/City/City_Data fetches //
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
    console.log(`1country: ${country}`);
    console.log(`Getting States!`);

    await fetch(`https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`)
    .then(function(response){
        console.log(`2country: ${country}`);
        return response.json();
    })
    .then((json) => {
        console.log(json.data);
        console.log(`3country: ${country}`);
        let stateObj ={};
        let countryKey = "country";
        stateObj[countryKey] = `${country}`;
        dataArr = [];
        console.log(`dataArr: ${dataArr}`);
        dataArr.push(stateObj);
        for (let dataItem of json.data){
            stateObj ={};
            const stateKey = "state";
            stateObj[stateKey] = dataItem.state;
            dataArr.push(stateObj);
        };
        console.log(`completed the loop!`)
        continueFunction(dataArr);
    
    })
    .catch((err) => {
        console.log(err);
    })
};

async function getCities(myButton){
    console.log(`1Country: ${country}`);
    console.log(`1State: ${state}`);
    console.log(`Getting Cities`);

    await fetch(`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then((json) => {
        console.log(`2Country: ${country}`);
        console.log(`2State: ${state}`);
    
        console.log(`country: ${country}`);
        // console.log(`state.country: ${}`)
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
};


/// Bad Air Version of Ghibli Code ///
let displayItems;

let bodyWrapperImg = document.querySelector("bodyWrapperImage");
let displayOne = document.getElementById('ul-one');
let displayTwo = document.getElementById('ul-two');
let displayThree = document.getElementById('ul-three');

// accepts an event from 1 of 4 different HTML buttons and calls getFetch()
// with different parameters based on which button is clicked.
function chooseInput(myButton){
    console.log(`Starting chooseInput function`);
    console.log(`name00: ${myButton.name}`);
    console.log(`Value00: ${myButton.value}`);
    console.log(`country00: ${myButton.country}`);
    console.log(`State00: ${myButton.state}`);
    console.log(`city00: ${myButton.city}`);
    console.log(`myButton00: ${myButton}`);

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

//**** The function below used to do more. Now it just initializes the first fetch.
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

// ContinueFetch Function
async function continueFunction(dataArr){
    console.log(`continueFunction`);
    console.log(dataArr);

    // If (displayOne.firstChild == true) 
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
    // };   
    console.log("moving forward");

    let count = 0;
    console.log('creating buttons');
    for (item of dataArr){
        count += 1;
        // console.log(`item count: ${count}; item: ${item}`);
        let listItem = document.createElement('input'); 

        // checks for key of 'location' or 'current', if exists, uses 'cityData' for the key.
        if (item.hasOwnProperty('location')) {
            switch (dataArr.indexOf(item)){
                case 0:
                    console.log(item);
                    listItem.setAttribute('__country', `${item}`);
                    break;
                case 1:
                    console.log(item);

                    listItem.setAttribute('__state', `${item}`);
                    break;
                case 2:
                    console.log(item);

                    listItem.setAttribute('__city',`${item}`);
                default:
                    break;
            };
            listItem.innerHTML = `<p>${item.location}</p>`;
            // listItem.setAttribute('__country', `${item.country}`);
            // listItem.setAttribute('__state', `${item.state}`);
            // listItem.setAttribute('__city',`${item.city}`);
            listItem.setAttribute('value',`${item.location}`);
            listItem.setAttribute('onclick', 'chooseInput(this)');
            // break;
                
        } else if (item.hasOwnProperty('current')) {
            switch (dataArr.indexOf(item)){
                case 0:
                    console.log(item);

                    listItem.setAttribute('__country', `${item}`);
                    break;
                case 1:
                    console.log(item);

                    listItem.setAttribute('__state', `${item}`);
                    break;
                case 2:
                    console.log(item);

                    listItem.setAttribute('__city',`${item}`);
                default:
                    break;
            };

            listItem.innerHTML = `<p>${item.current}</p>`;
            // listItem.setAttribute('__country', `${item.country}`);
            // listItem.setAttribute('__state', `${item.state}`);
            // listItem.setAttribute('__city',`${item.city}`);
            listItem.setAttribute('value',`${item.current}`);
            listItem.setAttribute('onclick', 'chooseInput(this)');
            // break;
    
        // checks for key of 'city', if exists, uses 'city' for the key.
        } else if (item.hasOwnProperty('city')) {
            switch (dataArr.indexOf(item)){
                case 0:
                    console.log(item);

                    listItem.setAttribute('__country', `${item}`);
                    break;
                case 1:
                    console.log(item);

                    listItem.setAttribute('__state', `${item}`);
                    break;
                default:
                    break;
            };

            listItem.innerHTML = `<p>${item.city}</p>`;
            listItem.setAttribute('type', 'button');
            // listItem.setAttribute('__country', `${item.country}`);
            // listItem.setAttribute('__state', `${item.state}`);
            listItem.setAttribute('__city',`${item.city}`);
            listItem.setAttribute('name','city');
            listItem.setAttribute('value',`${item.city}`);
            listItem.setAttribute('onclick', 'chooseInput(this)');
            // break;
    
        // checks for key of 'state', if exists, uses 'state' for the key.
        } else if (item.hasOwnProperty('state')) {
            switch (dataArr.indexOf(item)){
                case 0:
                    console.log(item);
                    listItem.setAttribute('__country', `${item}`);
                    break;
                default:
                    break;
            };

            console.log(`has own property state`);
            listItem.innerHTML = `<p>${item.state}</p>`;
            listItem.setAttribute('type', 'button');
            // listItem.setAttribute('__country', item[0]);
            // console.log('__country', item[0])
            listItem.setAttribute('__state', `${item.state}`);
            // listItem.setAttribute('__city',`${item.city}`);
            listItem.setAttribute('name', 'state');
            listItem.setAttribute('value',`${item.state}`);
            listItem.setAttribute('onclick', 'chooseInput(this)');
            // break;
              
        // checks for key of 'country', if exists, uses 'country' for the key.
        } else if (item.hasOwnProperty('country')) {
            console.log(`Has Own Property country`);
            listItem.innerHTML = `<p>${item.country}</p>`;
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('name','country');
            listItem.setAttribute('__country', `${item.country}`);
            console.log('__country', `${item.country}`)
            listItem.setAttribute('__state', `${item.state}`);
            listItem.setAttribute('__city',`${item.city}`);
            listItem.setAttribute('value',`${item.country}`);
            listItem.setAttribute('onclick', 'chooseInput(this)');
            // break;
        
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
