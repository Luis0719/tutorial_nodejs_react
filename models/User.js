const mongoose = require('mongoose');
//const Schema = mongoose.Schema; Same as the bottom line. {} indican que existe un atributo en 'mongoose' que se llama 'Schema' y guargalo en una variable 'Schema'
const { Schema } = mongoose;

const userSchema = new Schema({
    userID: String,
    name: String,
    email: String
});

mongoose.model('users', userSchema);
