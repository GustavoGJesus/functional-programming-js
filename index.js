// Not functional
var name = "Gustavo Gomes";
var greeting = "Not functional: Hi, i'm ";

console.log(greeting + name);

// Functional
function greet(name) {
  return "Functional: Hi, i'm " + name;
}

const test = greet("Gustavo Gomes");
console.log(test)

// ----------------------------------------------------------------