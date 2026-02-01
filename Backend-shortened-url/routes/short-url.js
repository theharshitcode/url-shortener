const express = require('express');
const Router = express.Router();
const {Homepage, Shorturl, RedirectUrl} = require('../controller/short-url')

Router.get('/', Homepage);
Router.get('/:shortId', RedirectUrl);

Router.post('/', Shorturl);

module.exports = Router;