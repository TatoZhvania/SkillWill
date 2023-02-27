// პ. ი. რ. ვ. ე. ლ. ი.
const users = [
  { name: 'Temo', age: 25 },
  { name: 'Lasha', age: 21 },
  { name: 'Ana', age: 28 },
];


const findYoungest = (people) => {

  let youngestAge = people[0].age;
  let youngestName = people[0].name;

  for (let i = 0; i < people.length; i++) {
    if (people[i].age < youngestAge) {
      youngestAge = people[i].age;
      youngestName = people[i].name;
    }
  }

  return youngestName;
}

const youngestName = findYoungest(users); 
console.log(youngestName);


// // მ. ე. ო. რ. ე. 
const user = {
    name: 'Temo',
    age: 25,
    address: "Tbilisi"
};

const returnNewUser = (user) => {
    const newObj = {...user}
    return newObj;
}

const sameUser = returnNewUser(user);
console.log(sameUser);


// ესეც მეორე არის, უბრალოდ პირველი ვარიანტი ზუსტი თუა არ ვიცი.
// const person = {
//     name: "tato",
//     age: 19,
//     address: 'Tbilisi'
// };

// function axaliObieqti(user){
//     const newObj = Object.create(user);
//     newObj.name = user.name;
//     newObj.age = user.age;
//     return newObj;
// }

// console.log(axaliObieqti(person))




// მ. ე. ს. ა. მ. ე.
const rollDie = () => {
    const randomRoll = Math.floor(Math.random() * 6) + 1; 
    return randomRoll
}

const playGame = () => {
    let a = 0;
    let b = 0;

    while (true) {
        a++;
        if (rollDie() === 3) {
            console.log(`Player A wins in ${a} rolls!`);
            break;
        }

        b++;
        if (rollDie() === 3) {
            console.log(`Player B wins in ${b} rolls!`);
            break;
        }
    }
}

playGame();