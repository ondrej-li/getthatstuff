var mongoose = require("mongoose");

var requestSchema = new mongoose.Schema({
    _id: {type: String},
    username: String,
    gender: String,
    forename: String,
    surname: String,
    password: String,
    email: String,
    displayName: String,
    lastLogin: Date
});

module.exports = mongoose.model("Request", requestSchema);

