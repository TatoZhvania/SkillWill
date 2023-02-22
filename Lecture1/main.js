// პირველი 
const equalOrNot = (a, b) => {
    return a === b ? "ტოლია!" : "არ არის ტოლი!"
}

console.log(equalOrNot(2, 3))


// მეორე 
const fahrenheitToCelsius = (fahrenheit) => {
    if (typeof fahrenheit !== 'number') {
    return false;
  } else {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }
}

let fahrenheit = 90
let celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit} ფარენჰაიტი არის ${celsius}°C`); 


// მესამე

const calculating = (a, b, operation) => {
    if(typeof a !== "number" || typeof b !== "number") {
        return false
    }

    if(operation === "+") {
        return a + b

    }else if(operation === "-") {
        return a - b
    
    }else if(operation === "*") {
        return a * b

    }else if (operation === "/") {
        return a / b

    }else {
        return false
    }

}

console.log("a + b =", calculating(20, 5, '+')); 
console.log("a - b =", calculating(20, 5, '-'));
console.log("a * b =", calculating(20, 5, '*'));
console.log("a / b =", calculating(20, 5, '/'));