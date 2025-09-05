const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost/database2');
}

module.exports = connect;