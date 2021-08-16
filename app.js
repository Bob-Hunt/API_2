const apiKey = "47a456ff-4d8c-4295-b487-9500e5c8cb5e";

let country, state, city, city_data;
let countryObj, stateObj, cityObj, locationObj, currentObj;

// Country/State/City/City_Data functions //

// *******************************************************
// ***************** Get Countries ***********************
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


// *******************************************************
// ******************* Get States ************************
async function getStates(myButton){
    console.log(`Getting States!`);
    console.log('myButton.id:',myButton.id); // Indiana
    console.log('myButton.dataset.country:',myButton.dataset.country); // USA
    console.log('myButton.dataset.state:',myButton.dataset.state); // Indiana
    console.log('myButton.type :', myButton.type);// button
    console.log('myButton.id :', myButton.id);// Indiana
    console.log('myButton.value :', myButton.value);// Indiana
    console.log('myButton.name :', myButton.name);// Indiana

    country = myButton.dataset.country;
    state = myButton.dataset.state;


    await fetch(`https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`)
    .then(function(response){
        return response.json();
    })

    .then((json) => {
        console.log(json.data);

        let stateObj ={};
        let countryKey = "country";
        stateObj[countryKey] = `${country}`;
        dataArr = [];
        dataArr.push(stateObj);
        for (let dataItem of json.data){
            stateObj ={};
            const stateKey = "state";
            stateObj[stateKey] = dataItem.state;
            dataArr.push(stateObj);
        };
        console.log(`completed the loop!`)
        console.log(`States:dataArr:`, dataArr);
        continueFunction(dataArr);
    
    })
    .catch((err) => {
        console.log(err);
    })
};


// ******************************************************
// ******************* Get Cities ***********************
async function getCities(myButton){
    console.log('Getting Cities!');

    console.log(myButton.id);// Indiana
    console.log(myButton.dataset.state);// Indiana
    console.log(myButton.dataset.country);// USA
    console.log('myButton.type :', myButton.type);// button
    console.log('myButton.id :', myButton.id);// Indiana
    console.log('myButton.value :', myButton.value);// Indiana
    console.log('myButton.name :', myButton.name);// Indiana


    country = myButton.dataset.country;
    state = myButton.dataset.state;
    city = myButton.dataset.city;


    let citiesFetch = `https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`
    console.log(citiesFetch);

    await fetch(`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`)
    .then(function(response){
        return response.json();
    })


    .then((json) => {
        console.log(json.data);

        console.log("cities country:", country);
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
            if (dataItem.hasOwnProperty('city')){
                cityDataObj = {};
                let cityKey = "city";
                cityDataObj[cityKey] = city;
                dataArr.push(cityDataObj);
            };
            console.log(`completed the loop!`)
            console.log(`Cities: dataArr: ${dataArr}`);
            continueFunction(dataArr);
        };
    });       

    // .catch ((err) => {
    //     console.log(err);
    // });    
};

// *******************************************************
// ***************** Get City_Data ***********************
async function getCity_Data(myButton){
    console.log('Getting City Data!');

    country = mybutton.name[0];
    state = myButton.name[1];
    city = myButton.city;

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
        console.log(`City-Info: dataArr: ${dataArr}`);
        continueFunction(dataArr);
    });
};


/// Bad Air Version of Ghibli Code ///
let displayItems;

let bodyWrapperImg = document.querySelector("bodyWrapperImage");
let displayOne = document.getElementById('ul-one');
let displayTwo = document.getElementById('ul-two');
let displayThree = document.getElementById('ul-three');


//**** The function below initializes the first fetch.
async function getFetch(){
    console.log(`starting getFetch`)
    getCountries();
};

// ************* ContinueFetch Function ****************
// *****************************************************
async function continueFunction(dataArr){
    console.log(`continueFunction`);
    console.log('dataArr:', dataArr);

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

    let count = 0;
    for (item of dataArr){
        console.log('item of dataArr:',item);
        count += 1;
        let listItem = document.createElement('input'); 


        // checks for key of 'location' or 'current', if exists, uses 'cityData' for the key.
        if (item.hasOwnProperty('location')) {
            console.log('creating location buttons');
            nameArr = [];
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
                    listItem.setAttribute('__city', `${item}`);
                default:
                    break;
            };
            listItem.innerHTML = `<p>${item.location}</p>`;
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('value','location');
            listItem.setAttribute('__country', dataArr[0].country);
            listItem.setAttribute('__state', dataArr[1].state);
            listItem.setAttribute('__city', dataArr[2].city);
 
            //create an array to be passed through the button
            nameArr = [];
            countryObj = {};
            stateObj = {};
            cityObj = {};
            // **** Need to add functionality for location & current ****
            // locationObj = {};
            // currentObj = {};
            countryKey = 'country';
            stateKey = 'state';
            cityKey = 'city';
            countryObj[countryKey] = item.country;
            stateObj[stateKey] = item.state;
            cityObj[cityKey] = item.city;
            nameArr.push(countryObj);
            nameArr.push(stateObj);
            nameArr.push(cityObj);
            listItem.setAttribute('name', nameArr);
            listItem.setAttribute('onclick', 'getStates(this)');

            console.log(`Location: dataArr.indexOf(item): ${dataArr.indexOf(item)}`);
            console.log('name is:', nameArr);
            console.log('************************');

            nameArr = [];


        } else if (item.hasOwnProperty('current')) {
            console.log('creating current buttons');
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
                    listItem.setAttribute('__city', `${item}`);
                default:
                    break;
            };
            listItem.innerHTML = `<p>${item.current}</p>`;
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('value','current');
            listItem.setAttribute('__country', dataArr[0].country);
            listItem.setAttribute('__state', dataArr[1].state);
            listItem.setAttribute('__city', dataArr[2].city);
 
            //create an array to be passed through the button
            nameArr = [];
            countryObj = {};
            stateObj = {};
            cityObj = {};
            // **** Need to add functionality for location & current ****
            // locationObj = {};
            // currentObj = {};
            countryKey = 'country';
            stateKey = 'state';
            cityKey = 'city';
            countryObj[countryKey] = item.country;
            stateObj[stateKey] = item.state;
            cityObj[cityKey] = item.city;
            nameArr.push(countryObj);
            nameArr.push(stateObj);
            nameArr.push(cityObj);
            listItem.setAttribute('name', nameArr);
            listItem.setAttribute('onclick', 'getCity_Data(this)');

            console.log(`Current: dataArr.indexOf(item): ${dataArr.indexOf(item)}`);
            console.log('name is:', nameArr);
            console.log('************************');

            nameArr = [];


        // checks for key of 'city', if exists, uses 'city' for the key.
        } else if (item.hasOwnProperty('city')) {
            console.log(`City: dataArr.indexOf(item): ${dataArr.indexOf(item)}`);
            switch (dataArr.indexOf(item)){
                case 0:
                    console.log(item);
                    listItem.setAttribute('__country', `${item}`);
                    console.log(`__country, ${item}`);
                    break;
                case 1:
                    console.log(item);
                    listItem.setAttribute('__state', `${item}`);
                    break;
                default:
                    break;
            };
            console.log('Creating City Buttons!');
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('id', item.city)
            listItem.setAttribute('value', item.city);
            listItem.setAttribute('data-country', dataArr[0].country);
            listItem.setAttribute('data-state', dataArr[1].state);
            listItem.setAttribute('data-city', `${item.city}`);
            listItem.setAttribute('name', item.city);
            listItem.setAttribute('onclick', 'getCity_Data(this)');

            console.log('value', item.city );//undefined
            console.log('data-country', dataArr[0].country);//vietnam
            console.log('data-state', dataArr[1].state);// undefined
            console.log('data-city', item.city);// undefined
            console.log('name:', item.city);
            console.log(item.country); // vietnam
            console.log('************************');

            
        // checks for key of 'state', if exists, uses 'state' for the key.
        } else if (item.hasOwnProperty('state')) {
            console.log('creating state buttons');
            switch (dataArr.indexOf(item)){
                case 0:
                    console.log(item);
                    listItem.setAttribute('__country', `${item}`);
                    break;
                default:
                    break;
            };
            console.log('Creating State Buttons!')
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('id', item.state)
            listItem.setAttribute('value',item.state);
            listItem.setAttribute('data-country', dataArr[0].country);
            listItem.setAttribute('data-state', `${item.state}`);
            listItem.setAttribute('data-city',`${item.city}`);
            listItem.setAttribute('name', item.state);
            listItem.setAttribute('onclick', 'getCities(this)');

            console.log('value', item.state);//undefined
            console.log('data-country', dataArr[0].country);//vietnam
            console.log('datastate', item.state);// undefined
            console.log('data-city', item.city);// undefined
            console.log('name:', item.city);
            console.log(item.country); // vietnam
            console.log('************************');

            
        // checks for key of 'country', if exists, uses 'country' for the key.
        } else if (item.hasOwnProperty('country')) {
            console.log('Creating Country Buttons!');
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('id', item.country)
            listItem.setAttribute('value',item.country);
            listItem.setAttribute('data-country', `${item.country}`);
            listItem.setAttribute('name', item.country);
            listItem.setAttribute('onclick', 'getStates(this)');

            console.log('id:', item.country)
            console.log('value',item.country);//undefined
            console.log('__country',item.country);//vietnam
            console.log(item.country); // vietnam
            console.log('************************');

            
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
