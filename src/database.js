require('dotenv').config();

const mongoose = require('mongoose');
// const NODE_APP_MONGODB_HOST = process.env.NOTE_APP_MONGODB_HOST;
// const NODE_APP_MONGODB_DB = process.env.NOTE_APP_MONGODB_DB;
const { NODE_APP_MONGODB_HOST, NODE_APP_MONGODB_DB } = process.env;
const MONGODB_URI = `mongodb://${NODE_APP_MONGODB_HOST}/${NODE_APP_MONGODB_DB}`
mongoose.connect(MONGODB_URI, {

})
    .then(db => console.log('La base de datos esta conectada'))
    .catch(err => console.log(err));