const db=require('../util/database');

module.exports = class Product {
  constructor(name) {
    this.name = name;
  }

  saveproduct() {
    try {
      return db.execute('insert into products (title) values (?)',[this.name]);
      //console.log('product saved succesfully');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  }
  static getallproducts(){
    try {
      return db.execute('select * from products');
      } catch (err) {
        console.log('Error getting products from database:', err);
      }
    }

    static deleteproduct(id){
      try {
        const sql = 'DELETE FROM products WHERE id = ?';
      return db.execute(sql, [id]);
      } catch (error) {
        console.log('error deleting product: '+error);
      }
    }
};
