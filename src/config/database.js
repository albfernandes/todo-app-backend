const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL;
module.exports = mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

