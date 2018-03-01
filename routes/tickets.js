var express = require('express');
var router = express.Router();

/* ************************************************************************************
 * Este código gestiona el CRUD de los tickets,                                          *
 * .post('/') Se encarga de hacer las inserciones                                     *
 * para ello es requerdo el codigo del ticket (ti_code en la BD).                      *
 **************************************************************************************
 */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("tickets").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify(result));
	    db.close();
	});

    });
});

router.get('/latest', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("tickets").find({ti_status:"cerrado"}).limit(3).toArray(function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify(result));
	    db.close();
	});

    });
});

router.get('/processing', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("tickets").find({ti_status:"abierto"}).limit(0).toArray(function(err, result) {
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
    var openDate = new Date(req.body.openDate);
    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("tickets").insertOne({ti_openDate:openDate, ti_question:req.body.question, ti_answer:req.body.answer                                            , ti_rating:req.body.ti_rating, ti_status : req.body.status, ti_answer:req.body.answer, ti_rating:req.body.rating}, function(err, result) {
						if (err) throw err;
						res.send(JSON.stringify({response:true}));
						//console.log(req.body.action);
						db.close();
					    });

    });


});

router.post('/update', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";
    var openDate = new Date(req.body.openDate);
    var closureDate = new Date(req.body.closureDate);
    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var myquery = {ti_code: req.body.code};
	var newvalues = {ti_code:req.body.code, ti_openDate:openDate,
			 ti_closureDate:closureDate, ti_question:req.body.question, ti_answer:req.body.answer,
			 ti_rating:req.body.rating};
	db.collection("tickets").updateOne(myquery, newvalues, function(err, result) {
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
	var myquery = { ti_code: req.body.code };
	db.collection("tickets").deleteOne(myquery, function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify({response:true}));
	    console.log(req.body.code);
	    db.close();
	});
    });
});





module.exports = router;
