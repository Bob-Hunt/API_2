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
    console.log('myButton.country:',myButton.country);// undefined
    console.log('myButton.type :', myButton.type);// button
    console.log('myButton.id :', myButton.id);// Indiana
    console.log('myButton.value :', myButton.value);// Indiana
    console.log('myButton.data-country :', myButton.data-country);// NaN
    console.log('myButton.data-state :', myButton.data-state);// NaN
    console.log('myButton.name :', myButton.name);// Indiana
    console.log('myButton.onclick :', myButton.onclick);// onclickevent...

    country = myButton.dataset.country;
    state = myButton.dataset.state;
    let statequery = myButton.id;

    console.log('statequery.country:',statequery.country);
    console.log('statequery.state:',statequery.state);

    // const stateInfo = document.querySelector(statequery)
    // console.log('stateInfo.country:',stateInfo.dataset.country);
    // console.log('stateInfo.state:',stateInfo.dataset.state);

    state = myButton.dataset.state;
    country = myButton.dataset.country

    // console.log('*name is:', myButton.name); // ["USA","Indiana"]
    // console.log('*name.values are:' + nameArr.country +','+ nameArr.state +','+ nameArr.city)
    // console.log('*name.values are:' + nameArr[country] +','+ nameArr[state] +','+ nameArr[city])

    // console.log('myButton.name', myButton.name);
    // console.log('myButton.name.country', myButton.name.country);
    // console.log('myButton.name[country]', myButton.name[country]);
    // console.log('Object.keys(myButton.name.country)', Object.keys(myButton.name.country));
    // console.log('Object.values(myButton.name.country)', Object.values(myButton.name.country));
    // console.log('Object.keys(myButton.name)', Object.keys(myButton.name));
    // console.log('Object.values(myButton.name)', Object.values(myButton.name));


    // console.log('myButton.');
    // console.log('myButton.');
    // console.log('myButton.');


    // country = myButton.value;

    // country = myButton['country'];
    // country = myButton.__country;
    // console.log(`1country: ${country}`);// undefined
    // console.log(`1acountry: ${myButton.__country}`);// undefined
    // console.log(`1bcountry: `, country);// undefined
    // console.log(`1ccountry:`, myButton.__country);// undefined
    // console.log('A');
    // console.log('nameArr:', myButton.name)
    // console.log('1',country);// undefined
    // console.log('2',state);// undefined
    // console.log('3',myButton.country);// undefined
    // console.log('4',myButton.state);// undefined
    // console.log('5',myButton.__country);// undefined
    // console.log('6',myButton.__state);// undefined
    // console.log('End A');
    // console.log(`name00: ${myButton.name}`);// USA
    // console.log(`Value00: ${myButton.value}`);// USA
    // console.log(`country00: ${country}`);// undefined
    // console.log(`State00: ${state}`);// undefined
    console.log('************* End State Consoles ***********');


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

    console.log(myButton.id);
    console.log(myButton.data-state);
    console.log(myButton.data-country);


    const stateInfo = document.querySelector('myButton.id');
    console.log('stateInfo.dataset.state', stateInfo.dataset.state);
    console.log('stateInfo.dataset.country',stateInfo.dataset.country);



    country = myButton.name[0];
    state = myButton.value;
    state = state;
    // country = myButton['__country'];
    // state = myButton['__state'];

    console.log('1VCountry:',country); // U
    console.log('1VState:', state);// Indiana
    console.log('1Country:', myButton.country); // undefined
    console.log('1__Country:', myButton.__country); // undefined
    console.log('1State:', myButton.state); // undefined
    console.log('1__State:', myButton.__state); // undefined
    console.log('1value', myButton.value); // Indiana
    console.log('1name', myButton.name); // USA,Indiana
    console.log(`Getting Cities`);

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

// accepts an event from 1 of 4 different HTML buttons and calls getFetch()
// with different parameters based on which button is clicked.
// function chooseInput(myButton, country, state){
    
    // console.log(`Starting chooseInput function`);
    // console.log('A');
    // console.log('1',country);
    // console.log('2',state);
    // console.log('3',myButton.country);
    // console.log('4',myButton.state);
    // console.log('5',myButton.__country);
    // console.log('6',myButton.__state);
    // console.log('End A');

    // country = country;
    // state = state;
    // console.log(`name00: ${myButton.name}`);
    // console.log(`Value00: ${myButton.value}`);
    // console.log(`country00: ${country}`);
    // console.log(`State00: ${state}`);

    // switch (myButton.name) {
    //     case 'country':
    //         getStates(myButton.value);
    //         break;
    //     case 'state':
    //         // getCities(myButton.__country, myButton.value);
    //         // getCities(myButton[__country], myButton.value);
    //         getCities(country, myButton.value);
    //         break;
    //     case 'city':
    //         // getCityInfo(myButton[__country], myButton[__state], myButton.value);
    //         getCityInfo( country, state, myButton.value);
    //         // getCityInfo(myButton);
    //         break;
    //     default:
    //         getCountries();
    //         break;
    // }
// }

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
            listItem.setAttribute('onclick', 'getStates(this)');

            console.log(`Current: dataArr.indexOf(item): ${dataArr.indexOf(item)}`);
            console.log('name is:', nameArr);
            console.log('************************');

            nameArr = [];


        // checks for key of 'city', if exists, uses 'city' for the key.
        } else if (item.hasOwnProperty('city')) {
            console.log('creating city buttons');
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
            listItem.setAttribute('type', 'button');
            // Value appears on the button
            listItem.setAttribute('id', item.city)
            listItem.setAttribute('value', item.city);
            listItem.setAttribute('data-country', dataArr[0].country);
            listItem.setAttribute('data-state', dataArr[0].state);
            listItem.setAttribute('data-city', `${item.city}`);
            listItem.setAttribute('name', item.city);
            listItem.setAttribute('onclick', 'getStates(this)');

            console.log('__country', item.country);//vietnam
            console.log('value', country);//undefined
            console.log('data-country', dataArr[0].country);//vietnam
            console.log('data-state', item.state);// undefined
            console.log('data-city', item.city);// undefined
            console.log(item.country); // vietnam

            //create an array to be passed through the button
            // nameArr = [];
            // countryObj = {};
            // stateObj = {};
            // cityObj = {};
            // countryKey = 'country';
            // stateKey = 'state';
            // cityKey = 'city';
            // countryObj[countryKey] = item.country;
            // stateObj[stateKey] = item.state;
            // cityObj[cityKey] = item.city;
            // nameArr.push(countryObj);
            // nameArr.push(stateObj);
            // nameArr.push(cityObj);
            // listItem.setAttribute('name', nameArr);
            // listItem.setAttribute('onclick', 'getStates(this)');

            // console.log('name is:', nameArr);
            // console.log('name.values are:' + nameArr.country +','+ nameArr.state +','+ nameArr.city)
            console.log('************************');

            // nameArr = [];

            
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
            listItem.setAttribute('type', 'button');
            // Value appears on the button
            listItem.setAttribute('id', item.state)
            listItem.setAttribute('value',item.state);
            listItem.setAttribute('data-country', dataArr[0].country);
            listItem.setAttribute('data-state', `${item.state}`);
            // listItem.setAttribute('data-city',`${item.city}`);
            listItem.setAttribute('name', item.state);
            listItem.setAttribute('onclick', 'getStates(this)');

            console.log('__country', item.country);//vietnam
            console.log('value', country);//undefined
            console.log('data-country', dataArr[0].country);//vietnam
            console.log('data-state', item.state);// undefined
            console.log('data-city', item.city);// undefined
            console.log(item.country); // vietnam





            //create an array to be passed through the button
            // nameArr = [];
            // countryObj = {};
            // stateObj = {};
            // cityObj = {};
            // countryKey = 'country';
            // stateKey = 'state';
            // cityKey = 'city';
            // countryObj[countryKey] = item.country;
            // stateObj[stateKey] = item.state;
            // cityObj[cityKey] = item.city;
            // nameArr.push(countryObj);
            // nameArr.push(stateObj);
            // nameArr.push(cityObj);
            // listItem.setAttribute('name', nameArr);
            // listItem.setAttribute('onclick', 'getStates(this)');

            // console.log('State: dataArr.indexOf(item):',dataArr.indexOf(item)); // 14
            // console.log('dataArr[0]:', dataArr[0]); // {country:"USA"}
            // console.log('dataArr[0].country', dataArr[0].country); // USA
            // console.log('name is:', nameArr); // ["USA","Indiana"]
            // console.log('name.values are:' + nameArr.country +','+ nameArr.state +','+ nameArr.city)
            console.log('************************');

            // nameArr = [];

            
        // checks for key of 'country', if exists, uses 'country' for the key.
        } else if (item.hasOwnProperty('country')) {
            console.log('creating country buttons');
            listItem.setAttribute('type', 'button');
            listItem.setAttribute('id', item.country)
            listItem.setAttribute('value',item.country);
            listItem.setAttribute('data-country', `${item.country}`);
            // listItem.setAttribute('data-state', `${item.state}`);
            // listItem.setAttribute('data-city',`${item.city}`);
            listItem.setAttribute('name', item.country);
            listItem.setAttribute('onclick', 'getStates(this)');

            console.log('__country',item.country);//vietnam
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
