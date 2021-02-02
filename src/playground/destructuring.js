// const person = {
//   name: 'Neil',
//   age: 57,
//   location: {
//     city: 'Atlanta',
//     temp: 48
//   }
// };
//
// const {name, age} = person;
//
// console.log(`${name} is ${age}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
//
// console.log(publisherName);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
