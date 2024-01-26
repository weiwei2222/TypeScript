let age: number = 65553;
let message: string = "Hello World";

// arrays
let names: string[] = ["haha", "test"];
let ages: number[] = [34, 67, 2];
names.push("Lily");
ages.push(8);

// type inference with arrays
let fruits = ["apples", "pears", "bananas", "mangos"];
// fruits.push(20)
fruits.push("peaches");
const f = fruits[3]; // infers the type based on fruits type

let things = [true, "hello", 44, "haha", false];
const t = things[1]; // can be any of the types initially added
console.log(things);
console.log(t);

// object literals
let user: { firstName: string; age: number; id: number } = {
  firstName: "mario",
  age: 30,
  id: 1,
  // isFictional: true
};
// user.name = 25;
// user.email = "peach@netninja.dev";
user.firstName = "peach";
user.id = 2;
console.log(user);

// destructuring from objects
const { firstName, id }: { firstName: string; id: number } = user;
console.log({ firstName, id });

// type inference with object literals
let person = {
  name: "luigi",
  score: 35,
};

// person.name = true;
// person.id = 3;
person.name = "bowser";

const score = person.score; // infers number type
console.log(person);
