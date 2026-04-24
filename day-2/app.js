const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Phone", price: 20000, inStock: false },
  { name: "Tablet", price: 30000, inStock: true }
];

//Step 1: Filter in stock - products

const availableProduct = products.filter(product => product.inStock);

//Step 2: Extract name and Print

availableProduct.map(product => product.name).forEach(name => console.log(`Available : ${name}`));