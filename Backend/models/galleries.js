const {Schema, model } = require('mongoose');

const GalleriesSchema = new Schema({
    name: {type:String, required:true},
    isbn: {type:String,required:true},
    country: {type:String, required:true},
    date: {type: Date , default: Date.now},
    imagePath: {type: String}
});

module.exports = model('Gallery',GalleriesSchema);