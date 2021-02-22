/*
const person = {
  name: "Puru",
  age: 18,
  location: {
    city: "kolkata",
    temp: 29,
  },
};

const { name: firstname = "anonymous", age } = person;
console.log(`${firstname} is ${age}`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`it is ${temperature} in ${city} `);
}
*/

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };
// const { name: publisherName = "Self Published" } = book.publisher;
// console.log(publisherName);

//
//Array destructuring
//

// const address = [
//   "11299 S Junipa Street",
//   "Philadelphia",
//   "Pensilvania",
//   "19147",
// ];
// const [, city, state = "New York"] = address;
// console.log(`You are in ${city}  ${state}`);

const item = ["Coffe (iced)", "$2.00", "$2.50", "$2.75"];
const [product, , cost_medium] = item;
console.log(`A medium ${product} costs ${cost_medium}`);
