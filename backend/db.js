const mongoose = require('mongoose');

const connetToDb = () => {
    mongoose.connect('mongodb://localhost:27017/taskmanager', () => {
        console.log('connected to mongodb');
    });
}

module.exports = connetToDb;
