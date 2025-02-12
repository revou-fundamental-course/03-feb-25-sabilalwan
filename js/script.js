function celciusToFahrenheit(celsius) {
    fahrenheit = (celsius *9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit){
    celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log(celciusToFahrenheit(40));
console.log(fahrenheitToCelsius(104));
     