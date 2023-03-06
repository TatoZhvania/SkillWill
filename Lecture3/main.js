
// პ ი რ ვ ე ლ ი
const sumAndMultiple = (...numbers) => {
    const [num1, num2, ...restNumbers] = numbers;
    const sum = num1 + num2;
    let multiplication = 1;

    for (let i = 0; i < restNumbers.length; i++) {
        multiplication *= restNumbers[i];
    }

    return [sum, multiplication];
};

const [sum, multiplication] = sumAndMultiple(3, 2, 5, 7, 10);

console.log(`ჯამი = ${sum}`); 
console.log(`ნამრავლი = ${multiplication}`);




// მ ე ო რ ე
const getBankAddressCity = ({ banks }) => {
    const { address: { city } = {} } = banks?.[2] || {};
    return city;
};

const user = {
    banks: [
        { name: 'First', address: { city: 'Tbilisi' } },
        { name: 'Second', address: { city: 'Batumi' } }, 
        { name: 'Third' },
    ],
};

const city = getBankAddressCity(user);
console.log(city); 



// მ ე ს ა მე 
const firstObject = {
    name: "Magnus Carlsen",
    username: "Dr-Nykterstein",
    address: {
        country: "Norway"
    }
};


const objectCopy = (firstObject) => {
   
    const newObj = { 
        ...firstObject,
        address: {
            ...firstObject.address
        } 
    };

    return newObj;
}


const copy = objectCopy(firstObject);
console.log("იგივე მნიშვნელობის ობიექტი:", copy);




