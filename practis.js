
const user = {
    name: "Ella",
    age: 18,
    score: 0
};


if (user.age === 18 && user.name === "Ella") {
    console.log("Ella is 18 years old");
} else if (user.age >= 18) {
    console.log("Adult");
} else {
    console.log("Under 18");
}

function greet(name) {
    if (name === "") return "Name is empty";
    if (name === null || name === undefined) return "No name";

    return "Hello " + name;
}

console.log(greet("Ella"));

console.log(user.age === 18);
console.log(user.address?.city);
console.log(user.score ?? 100);

let quantity = 0;
let message = "";

console.log(quantity ?? 10);
console.log(message ?? "how are u");


const fruits = ["Apple", "Mango", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const numbers = [10, 20, 30];

if (numbers.length === 0) {
    console.log("The list is empty");
} else {
    console.log("First item:", numbers[0]);
    console.log("Last item:", numbers[numbers.length - 1]);
}
