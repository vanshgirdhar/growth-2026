const users = [
  { name: "Aman", age: 22 },
  { name: "Rahul", age: 38 },
  { name: "Vishal", age: 19 },
  { name: "Hitesh", age: 28 },
  { name: "Vansh", age: 24 }
];

// Filter users above 23
const filteredUsers = users.filter(user => user.age > 23);

// Format output
const result = filteredUsers.map(user => {
  return `${user.name} is ${user.age} years old`;
});

console.log(result);