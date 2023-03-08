
// პ ი რ ვ ე ლი
const replaceStr = (string, valueToReplace, valueToReplaceWith) => {
    let newStr = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] === valueToReplace) {
        newStr += valueToReplaceWith;
        } else {
        newStr += string[i];
        }
    }
    return newStr;
}


let inputString = "text :)";
let outputString = replaceStr(inputString, "t", "s");
console.log(outputString); 


// მ  ე  ო  რ  ე 
const firstLatterToUpperCase = (string) => {

    const words = someText.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word[0].toUpperCase() + word.slice(1);
    }

    return words.join(' ');
}


const someText = "lorem ipsum is simply dummy text of the printing and typesetting industry.";
const capitalizedText = firstLatterToUpperCase(someText);

console.log(capitalizedText); 



// მ  ე  ს  ა  მ  ე 
const users = [
    { name: "Lasha", age: 30 },
    { name: "Saba", age: 20 },
    { name: "Tina", age: 25 }
];

const sortUsersAges = (users) => {
    users.sort((a, b) => a.age - b.age);

    const ages = users.map(user => ({ age: user.age }));

    return ages;
}

const sortedAges = sortUsersAges(users);

console.log(sortedAges);

