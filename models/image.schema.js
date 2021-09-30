const { model } = require('./connectDB');
var mongoose = require('./connectDB');

var imageSchema = new mongoose.Schema({
    account: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: "",
    },
    dateOfMemory: {
        type: "String",
        default: null
    },
    memory: {
        type: String,
        default: "",
    },
    link_folder: {
        type: String,
        default: "",
    },
});

var image = mongoose.model('image', imageSchema, 'image');

module.exports = image;