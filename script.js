const person = {
  name: "ahmad",
  age: 20,
  city: "jakarta",
};

function callPerson({ age, name: n, country = "indo" }) {
  console.log(n, age, country);
}

callPerson(person);
