const mongoose = require('mongoose');

//create Course Schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    isPublished:{
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

//class creation
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;