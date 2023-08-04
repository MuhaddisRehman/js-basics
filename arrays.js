// Define an array of objects representing 10 items
const items = [
  {
    name: "Item 1",
    price: 10.99,
  },
  {
    name: "Item 2",
    price: 5.49,
  },
  {
    name: "Item 3",
    price: 15.75,
  },
  {
    name: "Item 4",
    price: 8.25,
  },
  {
    name: "Item 5",
    price: 12.5,
  },
  {
    name: "Item 6",
    price: 9.99,
  },
  {
    name: "Item 7",
    price: 7.95,
  },
  {
    name: "Item 8",
    price: 6.0,
  },
  {
    name: "Item 9",
    price: 3.75,
  },
  {
    name: "Item 10",
    price: 20.0,
  },
];

///// to get a specific value from array
const itemNames = items.map((item) => {
  return `${item.price}`;
});

/// to filter the items and store in another array
const filteredItems = items.filter((item) => {
  return item.price <= 9;
});
/// to retrieve object keys
const itemObjectKeys = Object.keys(items[0]);

/// find and return the first item that satisfies the condition
const foundItem = items.find((item) => {
  return item.name === "Item 7";
});
/// goes through every element and returns true if even one element satisfies the condition
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 5;
});
/// goes through every element and returns true only if every element satisfies the condition
const onlyInexpensiveItems = items.every((item) => {
  return item.price <= 10;
});
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log("🚀 ~ file: arrays.js:72 ~ total ~ total:", total);

items.forEach((item) => {
  console.log(item.name);
});
console.log(
  "🚀 ~ file: arrays.js:68 ~ onlyInexpensiveItems ~ onlyInexpensiveItems:",
  onlyInexpensiveItems
);
console.log(
  "🚀 ~ file: arrays.js:66 ~ hasInexpensiveItems ~ hasInexpensiveItems:",
  hasInexpensiveItems
);
console.log("🚀 ~ file: arrays.js:61 ~ foundItem ~ foundItem:", foundItem);
console.log("🚀 ~ file: arrays.js:49 ~ itemNames ~ itemNames:", itemNames);
console.log("🚀 ~ file: arrays.js:49 ~ itemObjectKeys:", itemObjectKeys);
console.log(
  "🚀 ~ file: arrays.js:52 ~ filteredItems ~ filteredItems:",
  filteredItems
);
