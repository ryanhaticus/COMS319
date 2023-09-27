// Excercise 1
const maxOfTwo = (n1, n2) => Math.max(n1, n2);

console.log(maxOfTwo(1, 2));

// Excercise 2. Restricted not to use Math.max.
const maxOfArray = (arr) => arr.reduce((a, b) => (a > b ? a : b));

console.log(maxOfArray([0, 1, -2, 49, 51, 17]));

// Excercise 3
const showProperties = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  console.log("List of keys:");
  keys.forEach((key) => console.log(key));

  console.log("List of values:");
  values.forEach((value) => console.log(value));
};

showProperties({
  hello: "world",
  foo: "bar",
});

// Excercise 4
const circle = {
  radius: 2,
  area: function () {
    return Math.PI * Math.pow(this.radius, 2);
  },
};

console.log(circle.area());

// Excercise 5
const circleModified = {
  radius: 2,
  area: function () {
    return Math.PI * Math.pow(this.radius, 2);
  },
  get radiusValue() {
    return this.radius;
  },
};

console.log(`Area with ${circleModified.radiusValue}: ${circle.area()}`);
