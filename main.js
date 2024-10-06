const celciusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computetemp(event){
    const currentvalue = +event.target.value;

    switch(event.target.name){
        case "celcius" :
            kelvinEl.value = (currentvalue + 273.32).toFixed(2);
            fahrenheitEl.value = (currentvalue* 1.8 + 32 ).toFixed(2);
            break;
        case "fahrenheit" :
            celciusEl.value = ((currentvalue - 32)/ 1.8 ).toFixed(2);
            kelvinEl.value = ((currentvalue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin" :
            celciusEl.value = (currentvalue - 273.32).toFixed(2);
            fahrenheitEl.value = ((currentvalue-273.32 ) *1.8 + 32).toFixed(2);
            break;
        default :
            break;
    }

}