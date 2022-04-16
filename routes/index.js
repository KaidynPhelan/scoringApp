var express = require('express');
var rootRouter = express.Router();

var shooters = require('./shooters');
var comps = require('./comp');

rootRouter.use('/shooters' , shooters)
rootRouter.use('/comps', comps);



module.exports = rootRouter;