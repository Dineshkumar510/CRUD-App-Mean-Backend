if(process.env.NODE_ENV !== "production" ) {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const cors = require('cors');
const port = process.env.PORT || 8080;
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/MEAN-App';

//basic config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//mongoDB configuration
mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });


app.use('/', require('./routes/index.route'));


app.listen(port, ()=> 
console.log(`App is running on port: ${port}`));
