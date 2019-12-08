const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.port || 3003;
const morgan = require('morgan');
const allowCors = require('./cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(allowCors);

const server = app.listen(port, function () {
    let port = server.address().port;
    console.log('Online server at: '+port);
});

module.exports = app;