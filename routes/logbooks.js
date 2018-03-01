var express = require('express');
var router = express.Router();

/* ************************************************************************************
 * Este código gestiona el CRUD de la bitácora,                                          *
 * .post('/') Se encarga de hacer las inserciones                                     *
 * para el update y delete es requerdo el codigo del ticket (ti_code en la BD).                      *
 **************************************************************************************
 */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("logbooks").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify({user:result}));
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
	db.collection("logbooks").insertOne({lo_date:req.body.date, lo_ti_answer:req.body.answer, lo_ti_status:req.body.status,
					    lo_ti_code:req.body.code}, function(err, result) {
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

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var myquery = {lo_code: req.body.code};
	var newvalues = {lo_ti_code:req.body.code, lo_openDate:req.body.openDate, lo_closureDate:req.body.closureDate, lo_username:req.body.username,  lo_question:req.body.question, lo_answer:req.body.answer, lo_ti_status:req.body.status, lo_worker_email:req.body.workeremail};
	db.collection("logbooks").updateOne(myquery, newvalues, function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify({response:true}));

	    db.close();
	});

    });


});

router.delete('/delete', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var myquery = { lo_code: req.body.code };
	db.collection("logbooks").deleteOne(myquery, function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify(result));
	    console.log(req.body.code);
	    db.close();
	});
    });
});

module.exports = router;
