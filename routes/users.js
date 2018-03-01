var express = require('express');
var router = express.Router();

/** 
  * Este código gestiona el CRUD del usuario,                                         
  * Todo usario tiene un TIPO por lo cual con esto se manejan los 4 tipos de usuario  
  * .post('/') Se encarga de hacer las inserciones                                    
  * para ello es requerdo el nombre del registro (us_name en la BD).                  
  *
  */


/** 
  * El método GET regresa un array en formato JSON con toda la infornación del usuario 
  * la cual incluye:                                                                   
  * > Nombre de usuario                                                                
  * > Contrasena                                                                       
  * > E-Mail                                                                           
  * > Tipo de usuario                                                                  
  * > Edificio (Escuela o dependencia) al cual pertenece                               
  */
 
router.get('/', function(req, res, next) {                                
    res.setHeader('Content-Type', 'application/json');                      
    var MongoClient = require('mongodb').MongoClient;                     
    var url = "mongodb://localhost:27017/pi";                             
                                                                          
    MongoClient.connect(url, function(err, db) {                          
	if (err) throw err;
	db.collection("users").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    res.send(JSON.stringify(result));
	    db.close();
	});

    });
});


/**
  * El método POST direccionado a la dirección raíz recibe el body de un request en    
  * formato x-www-form-urlencoded donde se mandan parámetros los cuales se incluyen:                                                                                    *
  * > Nombre de usuario                                                                
  * > Contrasena                                                                       
  * > E-Mail                                                                           
  * > Tipo de usuario                                                                  
  * > Edificio (Escuela o dependencia) al cual pertenece                               
  */

router.post('/', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("users").insertOne({us_username:req.body.username, us_password:req.body.password, us_email:req.body.email,
					  us_type:req.body.type, us_building:req.body.building}, function(err, result) {
					      if (err) throw err;
					      res.send(result);
          //console.log(req.body.action);
					      db.close();
					  });
    });
});

/** 
  * El método POST direccionado a la dirección /update recibe el body de un request en 
  * formato x-www-form-urlencoded donde se mandan parámetros los cuales se incluyen:                                            
  * > Nombre de usuario                                                                
  * > Contrasena                                                                       
  * > E-Mail (email)                                                                   
  * > Tipo de usuario (type)                                                           
  * > Edificio (Escuela o dependencia) al cual pertenece (building)                    
  * > El nombre de usuario que se uso para actualizar el registro (old_username)       
  */

router.post('/update', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var myquery = {us_username:req.body.old_username};
        var newvalues = {us_username:req.body.username, us_password:req.body.password, us_email:req.body.email,
			 us_type:req.body.type, us_building:req.body.building};
        db.collection("users").updateOne(myquery, newvalues, function(err, result) {
            if (err) throw err;
            res.send(JSON.stringify({response:true}));

            db.close();
	});

    });
});

/**
 * El método POST direccionado a /delete recibe el email del usuario en               
 * formato x-www-form-urlencoded con el cual se busca el registro a eliminar.         
 */

router.post('/delete', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/pi";

    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var myquery = { us_email: req.body.email};
	db.collection("users").deleteMany(myquery, function(err, result) {
	    if (err) throw err;
            res.send(JSON.stringify({response:true}));
            console.log(req.body.username);
	    db.close();
	});
    });
});





module.exports = router;
