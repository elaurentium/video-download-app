const express = require('express');
const urlDoVideoRouter = require('./router/urlDoVideo.router');

const app = express();

app.use(express.json());

app.use('/download', urlDoVideoRouter);

module.exports = app;