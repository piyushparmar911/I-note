const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/i-notes";  // Replace 'yourDatabaseName' with the actual name of your MongoDB database.

const connectToMongoo =  () => {
        // Connect to MongoDB without deprecated options
        mongoose.connect(mongoURI);
        console.log('Connected to MongoDB successfully');

}

module.exports = connectToMongoo;
