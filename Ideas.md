**************************
instead of checking for hasPropertyOf... instead, count cycles through the app.
If first cycle, do the country stuff. arr[0] = country
If second cycle, do the state stuff. arr[0] = country, arr[1] = state
then city, arr[0] = country, arr[1] = state, arr[3] = city
then city-data  arr[0] = country, arr[1] = state, arr[3] = city, arr[4] = city-data

make it into a clean switch case

if (appCycle){
    case 1:
    case 2:
    case 3:
    case 4:
}

*************************
When the button initiates it's function, instead of passing myButton.value; try passing myButton.

*************************

console.log(dataArr); ** delivers different results than 
console.log(`States:dataArr: ${dataArr}`);

*************************

might try onclick='chooseInput(this.__country, this.__state, this.__city)'

*************************