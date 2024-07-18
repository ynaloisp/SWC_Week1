const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');
const cors = require('cors');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);
app.use(cors());

const enableCors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};

app.use(enableCors);

app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated');
});


mongoose.connect("mongodb+srv://ynaloispangilinan:STEAAPp8wjbNgMjM@db.tg3xlim.mongodb.net/Node-API?retryWrites=true&w=majority&appName=DB")
.then(() => {
    console.log("Connected to Database.");
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
})
.catch(() => {
    console.log("Connection failed.");
})