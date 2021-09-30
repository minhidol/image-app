const mongoose = require('mongoose')

const option = {
    keepAlive: 2, 
    socketTimeoutMS: 172800000,
    connectTimeoutMS: 172800000,
    keepAlive: true
}

const uri = 'mongodb+srv://minh:minh123456@cluster0.0lhro.mongodb.net/Image?retryWrites=true&w=majority';

mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000
  }).catch(err => console.log(err));

mongoose.connection.on('open', function() {
    console.log('Connected to mongodb database');
});

mongoose.connection.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});

module.exports = mongoose;
