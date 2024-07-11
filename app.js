const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database.js');

const page404controller = require('./controllers/page404.js');

const Product = require('./models/product.js');
const User = require('./models/user.js');
const Order=require('./models/order.js');
const Cart=require('./models/cart.js');
const CartItem=require('./models/cart-item.js');
const orderItem=require('./models/order-item.js');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));

app.use(async (req, res, next) => {
    try {
        const user = await User.findByPk(1);
        if (user) {
            req.user = user;
        }
        next();
    } catch (err) {
        console.log(err);
    }
});

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(page404controller.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through:CartItem});
Product.belongsToMany(Cart, {through:CartItem});
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,{through:orderItem});
(async () => {
    try {
        await sequelize.sync();
        let user = await User.findByPk(1);
        if (!user) {
            user = await User.create({ name: 'venkata', email: 'reddy@gmail.com' });
        }
        let cart=await user.createCart();
        console.log('Available methods on user instance:', Object.keys(user.__proto__)); // Log available methods
        console.log('Available methods on user instance:', Object.keys(cart.__proto__));
        app.listen(3000);
    } catch (err) {
        console.log(err);
    }
})();
