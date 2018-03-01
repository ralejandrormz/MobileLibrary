var express = require('express');
var router = express.Router();

/* ************************************************************************************
 * Este código gestiona el CRUD de los tipos de usuario,                                          *
 * .post('/') Se encarga de hacer las inserciones                                     *
 * para el update y delete es requerdo nombre del tipo (ty_name en la BD).                      *
 **************************************************************************************
 */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("types").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify(result));
	    db.close();
	});

    });
});

router.post('/', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("types").insertOne({ty_name:req.body.name}, function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify({response:true}));
	    console.log(req.body.name);
	    db.close();
	});
    });
});

router.post('/update', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var myquery = {ty_name: req.body.oldName};
	var newvalues = {ty_name:req.body.name};
	db.collection("types").updateOne(myquery, newvalues, function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify({response:true}));
	    db.close();
	});
    });
});

router.post('/delete', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var myquery = { ty_name: req.body.name };
	db.collection("types").deleteOne(myquery, function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify({response:true}));
	    //console.log(req.body.name);
	    db.close();
	});

    });

});





module.exports = router;
