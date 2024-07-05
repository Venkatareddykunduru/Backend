const fs = require('fs');

module.exports = class Product {
  constructor(name) {
    this.name = name;
  }

  saveproduct() {
    try {
      fs.appendFileSync('products.json', JSON.stringify(this) + '\n');
      console.log('product saved succesfully');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  }
  static getallproducts(){
    try {
        // Read the file content as a string
        const data = fs.readFileSync('products.json', 'utf8');
        
        // Split the file content by newline to get each JSON string
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        // Parse each line as a JSON object
        const products = lines.map(line => JSON.parse(line));
        
        // Log the objects to the console
        console.log('printing products');
        console.log(products);
        
        // Access individual objects
        products.forEach(product => {
          console.log(`Name: ${product.name}`);
        });
      } catch (err) {
        console.error('Error reading or parsing the file:', err);
      }
  }
};
