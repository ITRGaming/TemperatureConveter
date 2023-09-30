function roundNumber(number){
    return Math.round(number*100)/100
}

/* Celcius to Fahrenheit and Kelvin */
function calcFnK(value) {
    var Fans, Kans ;
    var numValue = parseFloat(value);
    Fans= (numValue*(9/5)) + 32;
    Kans= numValue + 273.15;
    
    document.getElementById('f-ans').value = roundNumber(Fans);
    document.getElementById('k-ans').value = roundNumber(Kans);
}

/* Fahrenheit to Celcius and Kelvin */
function calcCnK(value) {
    var Cans, Kans ;
    var numValue = parseFloat(value);
    Cans= (numValue -32) * (5/9);
    Kans= (numValue -32) * (5/9) + 273.15;
    
    document.getElementById('c-ans').value = roundNumber(Cans);
    document.getElementById('k-ans').value = roundNumber(Kans);
}

/* Kelvin to Celcius and Fahrenheit */
function calcCnF(value) {
    var Cans, Fans ;
    var numValue = parseFloat(value);
    Cans= numValue - 273.15;
    Fans= (numValue - 273.15) * (9/5) + 32;
    
    document.getElementById('c-ans').value = roundNumber(Cans);
    document.getElementById('f-ans').value = roundNumber(Fans);
}

btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})