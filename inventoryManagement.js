// Write your code here
// Task 2: Create the Product Inventory Array
const productInventory = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Headphones", price: 150, category: "Electronics" },
  { name: "Coffee Maker", price: 80, category: "Appliances" }
];

// Task 3: Access Product Information
// Write a function called logFirstProduct to console log the details of the first product
function logFirstProduct() {
  console.log(productInventory[0]);
}

// Task 4: Add a Product
// Write a function called addProduct to add a new product taking the product name as an argument
function addProduct(productName) {
  const newProduct = { name: productName, price: 0, category: "General" };
  productInventory.push(newProduct);
}

// Task 5: Update Product Information
// Write a function called updateProductName taking the product's position and the new name
function updateProductName(index, newName) {
  if (productInventory[index]) {
    productInventory[index].name = newName;
  }
}

// Task 6: Remove a Product
// Write a function called removeLastProduct to remove the last product from the array
function removeLastProduct() {
  productInventory.pop();
}

// Export functions for testing
module.exports = {
  productInventory,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct
};


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
