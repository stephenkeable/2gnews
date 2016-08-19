var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
    res.locals.page_title = "2G News";
    
    next();
    
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=86400");
    res.set("Vary", "Accept-Encoding");

    res.render('home' , { 
  		title: res.locals.page_title,
  		website: req.website
  	});
    
});

router.get('/about', function (req, res, next) {
    
    res.locals.page_title = "About 2G News";
    
    next();
    
}, function (req, res) {
    
    //set cache control headers
	res.set("Cache-Control","max-age=86400");
    res.set("Vary", "Accept-Encoding");

    res.render('about' , { 
  		title: res.locals.page_title,
  		website: req.website
  	});
    
});

module.exports = router;